import { http, HttpResponse } from 'msw';
import { mockQuizzes, mockHistory, organizerQuizzes } from './data';

export const handlers = [
  // GET /api/quizzes/random?count=2
  http.get('/api/quizzes/random', ({ request }) => {
    const url = new URL(request.url);
    const count = Number(url.searchParams.get('count')) || 2;
    const shuffled = [...mockQuizzes].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return HttpResponse.json(selected);
  }),

  // GET /api/sessions/history (с авторизацией – токен игнорируем)
  http.get('/api/sessions/history', () => {
    return HttpResponse.json(mockHistory);
  }),

  http.get('/api/organizer/quizzes', () => {
    return HttpResponse.json(organizerQuizzes);
  }),
];