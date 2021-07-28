import React from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

export default class ImageGallery extends React.Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const { page } = this.state;

    if (prevName !== nextName || prevState.page !== page) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=21731016-f00a62a1d829b8e9d99c92f14&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((images) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...images.hits],
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

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
        {images.length > 0 && (
          <>
            <ul className={css.ImageGallery}>
              {images.map((image) => {
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
            <Button onClick={this.onLoadMore} />
          </>
        )}
      </div>
    );
  }
}
