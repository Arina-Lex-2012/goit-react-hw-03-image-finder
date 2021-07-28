import React from "react";
import css from "./ImageGalleryItem.module.css";
import Loader from "../Loader/Loader";

export default class ImageGalleryItem extends React.Component {
  state = {
    isImageLoaded: false,
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        {!this.state.isImageLoaded && <Loader />}
        <img
          onClick={this.props.onImageSelect}
          src={this.props.webformatURL}
          alt={this.props.tags}
          className={css.ImageGalleryItemImage}
          onLoad={() => this.setState({ isImageLoaded: true })}
        />
      </li>
    );
  }
}
