import React, { Fragment, useEffect, useContext } from "react";
import GiphyContext from "../../context/giphy/giphyContext";
import Search from "../gifs/Search";
import Gifs from "../gifs/Gifs";

const Home = () => {
  const giphyContext = useContext(GiphyContext);
  const { gifs, searchHomeGifs } = giphyContext;

  useEffect(() => {
    if (gifs.length === 0) {
      searchHomeGifs();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Search />
      <Gifs />
    </Fragment>
  );
};

export default Home;
