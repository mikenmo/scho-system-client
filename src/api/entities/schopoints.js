import axios from 'axios';

export const getBabies = id => {
  return axios.get(`/api/schos/${id}`);
};

export const addPoints = details => {
  return axios.put(`api/points/add`, details);
};

export const subtractPoints = details => {
  return axios.put(`api/points/subtract`, details);
};

export const resetPoints = details => {
  return axios.put(`/api/points/reset`, details);
};

export const resetAllPoints = id => {
  return axios.put(`/api/points/resetAll`, id);
};
