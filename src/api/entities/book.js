import axios from 'axios';

export const getBooks = () => {
  return axios.get(`/api/books`);
};

export const getBook = id => {
  return axios.get(`/api/books/${id}`);
};

export const createBook = details => {
  return axios.post(`/api/books`, details);
};

export const removeBook = id => {
  return axios.delete(`/api/books/${id}`);
};

export const editBook = details => {
  return axios.put(`/api/books/`, details);
};
