import api from '../api/axios.js'; 

export const fetchRandomQuizzes = (count = 2) => {
  return api.get(`/quizzes/random?count=${count}`)
    .then(res => res.data);
};

export const fetchHistory = () => {
  return api.get('/sessions/history')
    .then(res => res.data);
};