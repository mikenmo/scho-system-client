import axios from 'axios';

export const getDates = () => {
  return axios.get('/api/dates');
};

export const createDate = details => {
  return axios.post('/api/dates', details);
};

export const removeDate = id => {
  return axios.delete(`/api/dates/${id}`);
};
