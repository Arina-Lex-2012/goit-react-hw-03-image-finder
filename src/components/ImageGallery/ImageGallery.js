import React from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends React.Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.images.map((image) => {
          return (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClick={this.props.toggleModal}
              onImageSelect={() => {
                this.props.onImageSelect(image.largeImageURL, image.tags);
              }}
            />
          );
        })}
      </ul>
    );
  }
}
