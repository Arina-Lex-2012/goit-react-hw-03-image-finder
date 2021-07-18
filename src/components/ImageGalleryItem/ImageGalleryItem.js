import React from "react";
import css from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends React.Component {
  render() {
    return (
      <li className={css.ImageGalleryItem} onClick={this.props.onClick}>
        <img
          src={this.props.webformatURL}
          alt={this.props.tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
