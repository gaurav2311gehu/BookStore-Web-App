import axios from 'axios';

// Use environment variable for API URL, fallback to localhost:5000
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

<<<<<<< HEAD
export const getBooks = () => api.get('/api/books');
export const getBookById = (id) => api.get(`/api/books/${id}`);
=======
export const getBooks = () => api.get('/books');
export const getBookById = (id: string) => api.get(`/books/${id}`);
>>>>>>> 922ea95f4832ebe5abaad01f2f500d6320d5ed31

export default api;
