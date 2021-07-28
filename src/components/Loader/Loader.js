import Loader from "react-loader-spinner";
import React from "react";

export default class imagesLoader extends React.Component {
  render() {
    return <Loader type="Circles" color="#00BFFF" height={100} width={100} />;
  }
}
