import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
// import Loader from './components/Loader/Loader';

export default class App extends React.Component {
  state = {
    imageName: "",
    showModal: false,
    modalImage: {},
  };

  handleSearhFormSubmit = (imageName) => {
    this.setState({
      imageName,
    });
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
    return (
      <div>
        <Searchbar onSubmit={this.handleSearhFormSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          toggleModal={this.toggleModal}
          altForModal={this.state.altForModal}
          srcForModal={this.state.srcForModal}
          onImageSelect={this.onImageSelect}
        />
        {this.state.showModal && (
          <Modal
            src={this.state.modalImage.src}
            alt={this.state.modalImage.alt}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </div>
    );
  }
}
