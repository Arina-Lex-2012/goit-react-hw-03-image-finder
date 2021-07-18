import React from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends React.Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ images: null, loading: true });

      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=21731016-f00a62a1d829b8e9d99c92f14&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Something went wrong with this ${nextName} request.`)
          );
        })
        .then((images) => this.setState({ images: images.hits }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;

    return (
      <div>
        {error && (
          <div>
            Something went wrong with this {this.props.imageName} request.
          </div>
        )}
        {loading && <div>Loading</div>}
        {images && (
          <ul className={css.ImageGallery}>
            {images.map((image) => (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                tags={image.tags}
                onClick={this.props.toggleModal}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
