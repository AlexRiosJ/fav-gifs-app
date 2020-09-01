import React, { useState, useContext } from "react";
import GiphyContext from "../../context/giphy/giphyContext";

const GifItem = ({ gif: { id, src, isFav } }) => {
  const [fav, setFav] = useState(isFav);
  const giphyContext = useContext(GiphyContext);
  const { setFavGif, removeFavGif } = giphyContext;

  const onClick = () => {
    setFav(!fav);
    if (isFav) {
      removeFavGif(id);
    } else {
      setFavGif(id);
    }
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = src;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const icon = `fa-heart ${fav ? "fas text-danger" : "far"}`;

  return (
    <div className="gif-card wrapper user-select-dissabled pb-2">
      <img className="card" src={src} alt="" style={{ width: "100%" }} />
      <span onClick={onClick} className="fav-glyphicon fav-button">
        <h4>
          <i key={icon}>
            <span className={icon} />
          </i>
        </h4>
      </span>
      <span
        onClick={copyToClipboard}
        className="link-glyphicon fav-button link-button"
      >
        <h5>
          <i className="fas fa-link"></i>
        </h5>
      </span>
    </div>
  );
};

export default GifItem;
