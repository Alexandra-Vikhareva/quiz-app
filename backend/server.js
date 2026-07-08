require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Квиз-приложение работает! 🚀');
});

app.get('/api/health', async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    res.json({ status: 'OK', userCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/register', async (req, res) => {
  const { email, password, name, role } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }
  if (!['organizer', 'participant'].includes(role)) {
    return res.status(400).json({ error: 'Роль должна быть organizer или participant' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Пользователь с таким email уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email и пароль обязательны' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Неверные учётные данные' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Неверные учётные данные' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: _, ...userWithoutPassword } = user;
    res.json({ token, user: userWithoutPassword });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Недействительный токен' });
  }
};

app.get('/api/quizzes', async (req, res) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        category: true,
        creator: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        questions: {
          include: {
            options: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/quizzes', authMiddleware, async (req, res) => {
  const { title, description, categoryId, timeLimit, questions } = req.body;

  if (req.user.role !== 'organizer') {
    return res.status(403).json({ error: 'Только организатор может создавать квизы' });
  }

  if (!title || !questions || questions.length === 0) {
    return res.status(400).json({ error: 'Название и вопросы обязательны' });
  }

  try {
    const quiz = await prisma.quiz.create({
      data: {
        title,
        description,
        categoryId,
        timeLimit,
        createdById: req.user.id,
        questions: {
          create: questions.map((q, index) => ({
            type: q.type || 'text',
            text: q.text,
            imageUrl: q.imageUrl,
            isMultiple: q.isMultiple || false,
            points: q.points || 1,
            order: index,
            options: {
              create: q.options.map((opt, idx) => ({
                text: opt.text,
                isCorrect: opt.isCorrect || false,
                order: idx,
              })),
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });

    res.status(201).json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании квиза' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});