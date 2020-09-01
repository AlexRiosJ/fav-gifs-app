import React, { useReducer } from "react";
import axios from "axios";
import GiphyContext from "./giphyContext";
import GiphyReducer from "./giphyReducer";
import {
  SEARCH_GIFS,
  SEARCH_FAV_GIFS,
  SET_LOADING,
  SET_FAV,
  REMOVE_FAV
} from "../types";

const GiphyState = (props) => {
  const initialState = {
    gifs: [],
    favoriteGifs: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GiphyReducer, initialState);

  const searchGifs = async (input) => {
    setLoading();
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${input}&rating=pg`
    );

    const payload = res.data.data.map((e) => {
      let gif = {};
      gif.id = e.id;
      gif.isFav =
        localStorage.getItem(e.id) !== null
          ? localStorage.getItem(e.id)
          : false;
      gif.src = e.images.original.url;
      return gif;
    });

    dispatch({
      type: SEARCH_GIFS,
      payload
    });
  };

  const searchHomeGifs = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&rating=pg`
    );

    const payload = res.data.data.map((e) => {
      let gif = {};
      gif.id = e.id;
      gif.isFav =
        localStorage.getItem(e.id) !== null
          ? localStorage.getItem(e.id)
          : false;
      gif.src = e.images.original.url;
      return gif;
    });

    dispatch({
      type: SEARCH_GIFS,
      payload
    });
  };

  const searchFavoriteGifs = async () => {
    setLoading();
    const favs = Object.entries(localStorage);
    const ids = favs.map((e) => e[0]).toString();
    console.log(ids);
    let payload = [];
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&ids=${ids}`
      );

      payload = res.data.data.map((e) => {
        let gif = {};
        gif.id = e.id;
        gif.isFav = true;
        gif.src = e.images.original.url;
        return gif;
      });
    } catch (e) {
    } finally {
      dispatch({
        type: SEARCH_FAV_GIFS,
        payload
      });
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setFavGif = (id) => {
    localStorage.setItem(id, true);
    dispatch({
      type: SET_FAV,
      payload: id
    });
  };

  const removeFavGif = (id) => {
    localStorage.removeItem(id);
    dispatch({
      type: REMOVE_FAV,
      payload: id
    });
  };

  return (
    <GiphyContext.Provider
      value={{
        gifs: state.gifs,
        favoriteGifs: state.favoriteGifs,
        loading: state.loading,
        searchGifs,
        searchHomeGifs,
        searchFavoriteGifs,
        setFavGif,
        removeFavGif
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;
