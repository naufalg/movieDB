import axios from 'axios';

const url = process.env.REACT_APP_URL_API;

export const getMovieSearchApi = async (input, page = 1) => {
  const res = await axios.get(`${url}s=${input}&page=${page}`);
  return res;
};

export const getMovieByIdApi = async (id) => {
  const res = await axios.get(`${url}i=${id}&plot=full`);
  return res;
};
