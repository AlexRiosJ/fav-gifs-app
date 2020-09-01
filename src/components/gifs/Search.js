import React, { useState, useContext } from "react";
import ReactTooltip from "react-tooltip";

import GiphyContext from "../../context/giphy/giphyContext";

const Search = () => {
  const [input, setInput] = useState("");
  const giphyContext = useContext(GiphyContext);
  const { searchGifs, searchHomeGifs } = giphyContext;

  const onSubmit = (e) => {
    e.preventDefault();
    searchGifs(input);
  };

  return (
    <div className="container mt-3">
      <h1>
        Go and find your <i className="fas fa-heart text-danger" /> GIFs!
      </h1>
      <form className="form mt-3" onSubmit={onSubmit}>
        <div className="form-group input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for all the GIFs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="submit"
              value="Search"
              className={`btn ${
                input.length < 3 ? "disabled btn-dark" : "btn-primary"
              }`}
              disabled={input.length < 3}
            >
              <i className="fas fa-search" />
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={searchHomeGifs}
              data-tip="Trending"
            >
              <i className="fas fa-fire"></i>
            </button>
            <ReactTooltip place="right" type="dark" effect="solid" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
