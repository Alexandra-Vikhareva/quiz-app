export const mockQuizzes = [
  {
    id: "q1",
    title: "Футбольные правила",
    description: "Знаете ли вы футбол? Проверьте свои знания!",
    category: {
      name: "Спорт",
      icon: "⚽"
    },
    isLive: true,
    participantsCount: 42,
    sessionId: "s1",
    roomCode: "ABC123",
    questions: [{ id: "q1-1" }, { id: "q1-2" }],
    createdAt: "2025-01-12T14:30:00Z"
  },
  {
    id: "q2",
    title: "JavaScript Основы",
    description: "Проверьте свои навыки программирования на JS.",
    category: {
      name: "Технологии",
      icon: "💻"
    },
    isLive: false,
    participantsCount: 12,
    sessionId: null,
    roomCode: null,
    questions: [{ id: "q2-1" }, { id: "q2-2" }, { id: "q2-3" }],
    createdAt: "2025-01-10T10:00:00Z"
  },
  {
    id: "q3",
    title: "Итальянская кухня",
    description: "Паста, пицца и многое другое. Как хорошо вы знаете итальянскую кухню?",
    category: {
      name: "Кулинария",
      icon: "🍝"
    },
    isLive: true,
    participantsCount: 28,
    sessionId: "s2",
    roomCode: "XYZ789",
    questions: [{ id: "q3-1" }, { id: "q3-2" }],
    createdAt: "2025-01-13T09:15:00Z"
  },
  {
    id: "q4",
    title: "Столицы Европы",
    description: "География для всех. Угадайте столицы европейских стран.",
    category: {
      name: "Путешествия",
      icon: "🌍"
    },
    isLive: false,
    participantsCount: 8,
    sessionId: null,
    roomCode: null,
    questions: [{ id: "q4-1" }, { id: "q4-2" }, { id: "q4-3" }],
    createdAt: "2025-01-14T16:45:00Z"
  },
  {
    id: "q5",
    title: "Живопись Ренессанса",
    description: "Искусство 15-16 веков. Кто написал Мону Лизу?",
    category: {
      name: "Искусство",
      icon: "🎨"
    },
    isLive: true,
    participantsCount: 15,
    sessionId: "s3",
    roomCode: "REN123",
    questions: [{ id: "q5-1" }, { id: "q5-2" }],
    createdAt: "2025-01-15T11:00:00Z"
  }
];

export const mockHistory = [
  {
    id: 'h1',
    quizTitle: 'Intro to Macroeconomics',
    category: { name: 'Economics' },
    date: '2025-01-15T10:30:00Z', // 2 days ago
    score: 12,
    totalPossible: 13,
    percentage: 92,
    rank: 1,
    sessionId: 's1',
    status: 'finished'
  },
  {
    id: 'h2',
    quizTitle: 'JavaScript Closures',
    category: { name: 'Technology' },
    date: '2025-01-14T14:00:00Z',
    score: 8,
    totalPossible: 10,
    percentage: 80,
    rank: 3,
    sessionId: 's2',
    status: 'finished'
  },
  {
    id: 'h3',
    quizTitle: 'World Capitals',
    category: { name: 'Geography' },
    date: '2025-01-12T09:00:00Z',
    score: 15,
    totalPossible: 15,
    percentage: 100,
    rank: 1,
    sessionId: 's3',
    status: 'finished'
  },
  {
    id: 'h4',
    quizTitle: 'Italian Cuisine Basics',
    category: { name: 'Food' },
    date: '2025-01-10T18:20:00Z',
    score: 7,
    totalPossible: 12,
    percentage: 58,
    rank: 5,
    sessionId: 's4',
    status: 'finished'
  },
  {
    id: 'h5',
    quizTitle: 'Renaissance Art',
    category: { name: 'Art' },
    date: '2025-01-08T11:15:00Z',
    score: 9,
    totalPossible: 10,
    percentage: 90,
    rank: 2,
    sessionId: 's5',
    status: 'finished'
  },
  {
    id: 'h6',
    quizTitle: 'Football Rules',
    category: { name: 'Sports' },
    date: '2025-01-05T16:45:00Z',
    score: 6,
    totalPossible: 8,
    percentage: 75,
    rank: 4,
    sessionId: 's6',
    status: 'finished'
  }
];