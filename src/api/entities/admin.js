import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users');
};

export const getUser = id => {
  return axios.get(`/api/users/${id}`);
};

export const createUser = details => {
  return axios.post('/api/users', details);
};

export const removeUser = id => {
  return axios.delete(`/api/users/${id}`);
};

export const editUser = details => {
  return axios.put('/api/users/', details);
};

export const getGuardians = () => {
  return axios.get('/api/guardians');
};
