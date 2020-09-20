import axios from 'axios';

export const getAnnouncements = () => {
  return axios.get('/api/announcements');
};

export const createAnnouncement = details => {
  return axios.post('/api/announcements', details);
};

export const removeAnnouncement = id => {
  return axios.delete(`/api/announcements/${id}`);
};
