import React, { useContext, useState } from "react";
import GiphyContext from "../../context/giphy/giphyContext";

import GifItem from "./GifItem.js";
import Loader from "../layout/Loader";

const Gifs = () => {
  const [onlyFavs, setOnlyFavs] = useState(false);
  const giphyContext = useContext(GiphyContext);
  const { loading, gifs } = giphyContext;

  let output = gifs;

  if (onlyFavs) {
    output = gifs.filter((e) => e.isFav);
  }

  let out = [];
  const s = output.length / 4;

  for (let i = 0; i < output.length; i += s) {
    out.push(output.slice(i, i + s));
  }

  if (loading) {
    return (
      <div>
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="onlyFavs"
              checked={onlyFavs}
              onChange={(e) => setOnlyFavs(e.target.checked)}
            />
            <label
              className="custom-control-label user-select-dissabled"
              htmlFor="onlyFavs"
            >
              Show only <i className="fas fa-heart text-danger" />
            </label>
          </div>
        </div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="onlyFavs"
              checked={onlyFavs}
              onChange={(e) => setOnlyFavs(e.target.checked)}
            />
            <label
              className="custom-control-label user-select-dissabled"
              htmlFor="onlyFavs"
            >
              Show only <i className="fas fa-heart text-danger" />
            </label>
          </div>
        </div>
        <div className="row">
          {out.reverse().map((e, i) => (
            <div key={i} className="col-3" style={gifStyle}>
              {e.map((gif) => (
                <GifItem key={gif.id} gif={gif} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const gifStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "0.25rem"
};

export default Gifs;
