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

const initialState = {
  isLoading: false,
  isLoaded: false,
  isLoadMore: false,
  isLoadAutoComp: false,
  allLoaded: false,
  activePage: 1,
  totalResults: null,
  searched: null,
  autoComplete: null,
  movies: null,
  shownData: null,
  moviesById: null,
  moviesError: null,
  moviesByIdError: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        searched: action.search,
        movies: action.payload,
        activePage: action.page,
        totalResults: action.totalResults,
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        moviesError: action.error,
      };
    case GET_MOVIE_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        moviesById: action.payload,
      };
    case GET_MOVIE_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        moviesError: action.error,
      };
    case CLEAR_MOVIE_BY_ID:
      return {
        ...state,
        moviesById: null,
      };
    case GET_MOVIE_NEXT_PAGE_REQUEST:
      return {
        ...state,
        isLoadMore: true,
      };
    case GET_MOVIE_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        isLoadMore: false,
        movies: [...state.movies, ...action.payload],
        activePage: action.page,
        allLoaded: action.payload.length < 10 ? true : false,
      };
    case GET_MOVIE_NEXT_PAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        moviesError: action.error,
      };
    case GET_MOVIE_AUTOCOMPLETE_REQUEST:
      return {
        ...state,
        isLoadAutoComp: true,
      };
    case GET_MOVIE_AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        isLoadAutoComp: false,
        autoComplete: action.payload,
      };
    case GET_MOVIE_AUTOCOMPLETE_ERROR:
      return {
        ...state,
        isLoadAutoComp: false,
        moviesError: action.error,
      };
    default:
      return state;
  }
}
