import React, { Fragment } from "react";
import loader from "./loader.gif";

const Loader = () => (
  <Fragment>
    <img
      src={loader}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    ></img>
  </Fragment>
);

export default Loader;
