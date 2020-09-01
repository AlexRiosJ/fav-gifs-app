import React, { useContext, useEffect } from "react";
import GiphyContext from "../../context/giphy/giphyContext";
import { Link } from "react-router-dom";

import GifItem from "./GifItem.js";
import Loader from "../layout/Loader";

const FavoriteGifs = () => {
  const giphyContext = useContext(GiphyContext);
  const { loading, searchFavoriteGifs, favoriteGifs } = giphyContext;

  useEffect(() => {
    searchFavoriteGifs();
    // eslint-disable-next-line
  }, []);

  let output = favoriteGifs;
  output = favoriteGifs.filter((e) => e.isFav);
  let out = [];
  const s = output.length / 4;
  for (let i = 0; i < output.length; i += s) {
    out.push(output.slice(i, i + s));
  }

  return (
    <div className="container mt-3 text-center">
      {favoriteGifs.length >= 1 ? (
        <h1>
          Your <i className="fas fa-heart text-danger" /> GIFs!
        </h1>
      ) : (
        <div>
          <h1>
            Go and get some <i className="fas fa-heart text-danger" /> GIFs!
          </h1>
          <h3>
            <Link className="nav-link" to="/">
              Return to Home <i className="fas fa-home" />
            </Link>
          </h3>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {out.reverse().map((e, i) => (
            <div key={i} className="col-3" style={gifStyle}>
              {e.map((gif) => (
                <GifItem key={gif.id} gif={gif} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const gifStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "0.25rem"
};

export default FavoriteGifs;
