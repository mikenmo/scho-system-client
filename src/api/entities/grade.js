import axios from 'axios';

export const getGWA = id => {
  return axios.get(`/api/tracker/${id}`);
};

export const getAllGWA = () => {
  return axios.get(`/api/tracker`);
};

export const editGrade = details => {
  return axios.put(`/api/grades`);
};

export const removeGrade = id => {
  return axios.delete(`/api/grades`, id);
};

export const createDate = details => {
  return axios.post(`/api/grades`, details);
};

export const getGrades = id => {
  return axios.get(`/api/grades/${id}`);
};

export const postGrade = grade => {
  return axios.post(`/api/grades`, grade);
};

export const deleteGrade = id => {
  return axios.delete(`/api/grades/${id}`);
};
