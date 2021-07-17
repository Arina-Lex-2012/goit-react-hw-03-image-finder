import React from "react";
import css from "./ImageGalleryItem.module.css";
// import Modal from './components/Modal/Modal';

export default class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={this.props.webformatURL}
          alt={this.props.tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
