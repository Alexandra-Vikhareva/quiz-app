export const mockQuizzes = [
  {
    id: 'q1',
    title: 'JavaScript Основы',
    description: 'Проверьте знание JS',
    category: { name: 'Технологии' },
    questions: [{ id: 'q1-1' }, { id: 'q1-2' }],
    createdAt: '2025-01-10T10:00:00Z',
  },
  {
    id: 'q2',
    title: 'Футбольные правила',
    description: 'Знаете ли вы футбол?',
    category: { name: 'Спорт' },
    questions: [{ id: 'q2-1' }],
    createdAt: '2025-01-12T14:30:00Z',
  },
  {
    id: 'q3',
    title: 'Итальянская кухня',
    description: 'Паста, пицца и всё такое',
    category: { name: 'Кулинария' },
    questions: [{ id: 'q3-1' }, { id: 'q3-2' }, { id: 'q3-3' }],
    createdAt: '2025-01-13T09:15:00Z',
  },
  {
    id: 'q4',
    title: 'Столицы Европы',
    description: 'География для всех',
    category: { name: 'Путешествия' },
    questions: [{ id: 'q4-1' }],
    createdAt: '2025-01-14T16:45:00Z',
  },
  {
    id: 'q5',
    title: 'Живопись Ренессанса',
    description: 'Искусство 15-16 веков',
    category: { name: 'Искусство' },
    questions: [{ id: 'q5-1' }, { id: 'q5-2' }],
    createdAt: '2025-01-15T11:00:00Z',
  },
];

export const mockHistory = [
  {
    sessionId: 's1',
    code: 'ABC123',
    status: 'finished',
    startedAt: '2025-01-15T10:00:00Z',
    endedAt: '2025-01-15T10:30:00Z',
    finalScore: 8,
    quiz: {
      id: 'q1',
      title: 'JavaScript Основы',
      category: { name: 'Технологии' },
      creator: { name: 'Алексей' },
    },
  },
  {
    sessionId: 's2',
    code: 'XYZ789',
    status: 'active',
    startedAt: '2025-01-16T14:00:00Z',
    endedAt: null,
    finalScore: 0,
    quiz: {
      id: 'q3',
      title: 'Итальянская кухня',
      category: { name: 'Кулинария' },
      creator: { name: 'Мария' },
    },
  },
];