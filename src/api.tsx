import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getFilmsFromAPI = async () => {
  const res = await axios.get('/films');
  return res;
};
