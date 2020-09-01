import {
  SEARCH_GIFS,
  SET_LOADING,
  SET_FAV,
  REMOVE_FAV,
  SEARCH_FAV_GIFS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        gifs: action.payload,
        loading: false
      };
    case SEARCH_FAV_GIFS:
      return {
        ...state,
        favoriteGifs: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_FAV:
      return {
        ...state,
        gifs: state.gifs.map((e) => {
          if (e.id === action.payload) {
            e.isFav = true;
          }
          return e;
        }),
        favoriteGifs: state.favoriteGifs.map((e) => {
          if (e.id === action.payload) {
            e.isFav = true;
          }
          return e;
        })
      };
    case REMOVE_FAV:
      return {
        ...state,
        gifs: state.gifs.map((e) => {
          if (e.id === action.payload) {
            e.isFav = false;
          }
          return e;
        }),
        favoriteGifs: state.favoriteGifs.filter((e) => e.id !== action.payload)
      };
    default:
      return state;
  }
};
