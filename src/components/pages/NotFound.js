import React, { useEffect, useContext } from "react";
import GiphyContext from "../../context/giphy/giphyContext";

const NotFound = () => {
  const giphyContext = useContext(GiphyContext);
  const { getNotFoundGif, notFoundGif } = giphyContext;

  useEffect(() => {
    getNotFoundGif();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="text-center">
      <h1 className="mt-3">404 Not Found</h1>
      <p className="lead">
        Sorry but the page you are looking for doesn't exist...
      </p>
      <div className="text-center">
        <img src={notFoundGif} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
