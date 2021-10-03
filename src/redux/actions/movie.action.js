import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_ERROR,
  CLEAR_MOVIE_BY_ID,
  GET_MOVIE_NEXT_PAGE_REQUEST,
  GET_MOVIE_NEXT_PAGE_SUCCESS,
  GET_MOVIE_NEXT_PAGE_ERROR,
  GET_MOVIE_AUTOCOMPLETE_REQUEST,
  GET_MOVIE_AUTOCOMPLETE_SUCCESS,
  GET_MOVIE_AUTOCOMPLETE_ERROR,
} from 'redux/types/movie.type';
import { getMovieByIdApi, getMovieSearchApi } from 'api/movie.api';

export const getMovie =
  (input = 'Movie', page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_MOVIE_REQUEST });
      const { data, status } = await getMovieSearchApi(input, page);
      const { Search, totalResults } = await data;
      if (status === 200) {
        dispatch({
          type: GET_MOVIE_SUCCESS,
          payload: Search,
          page: page,
          search: input,
          totalResults: parseInt(totalResults),
        });
      }
    } catch (error) {
      dispatch({ type: GET_MOVIE_ERROR, error: error });
    }
  };

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_BY_ID_REQUEST });
    const { data, status } = await getMovieByIdApi(id);

    if (status === 200) {
      dispatch({
        type: GET_MOVIE_BY_ID_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIE_BY_ID_ERROR, error: error });
  }
};

export const clearMovieById = () => (dispatch) => {
  dispatch({ type: CLEAR_MOVIE_BY_ID });
};

export const getMovieNextPage = (input, page) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_NEXT_PAGE_REQUEST });

    const { data, status } = await getMovieSearchApi(input, page + 1);
    const { Search } = await data;
    if (status === 200) {
      dispatch({
        type: GET_MOVIE_NEXT_PAGE_SUCCESS,
        payload: Search,
        page: page + 1,
      });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIE_NEXT_PAGE_ERROR, error: error });
  }
};

export const getMovieAutoComplete = (input, page) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_AUTOCOMPLETE_REQUEST });

    const { data, status } = await getMovieSearchApi(input, page);
    console.log('data', data);
    const { Search } = await data;
    const newArray = await Search.map((item) => ({ value: item.Title }));
    console.log(newArray);
    if (status === 200) {
      dispatch({
        type: GET_MOVIE_AUTOCOMPLETE_SUCCESS,
        payload: newArray,
      });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIE_AUTOCOMPLETE_ERROR, error: error });
  }
};
