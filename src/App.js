import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

export default class App extends React.Component {
  state = {
    images: [],
    imageName: "",
    loading: false,
    showModal: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
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

          if (page > 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onSubmit = (imageName) => {
    if (this.state.imageName === imageName) {
      return;
    }

    this.setState({ imageName, images: [] });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  onImageSelect = (src, alt) => {
    this.setState({ modalImage: { src, alt } });
    this.toggleModal();
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <>
        {error && (
          <div>
            Something went wrong with this {this.props.imageName} request.
          </div>
        )}
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <div>Loading</div>}

        {images.length > 0 && (
          <>
            <ImageGallery
              images={images}
              toggleModal={this.toggleModal}
              altForModal={this.state.altForModal}
              srcForModal={this.state.srcForModal}
              onImageSelect={this.onImageSelect}
            />
            <Button onClick={this.onLoadMore} />
          </>
        )}

        {this.state.showModal && (
          <Modal
            src={this.state.modalImage.src}
            alt={this.state.modalImage.alt}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}
