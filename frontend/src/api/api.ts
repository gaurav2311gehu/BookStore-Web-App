import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

export const getBooks = () => api.get('/api/books');
export const getBookById = (id: string) => api.get(`/api/books/${id}`);

export default api;