import React from "react";
import "./App.css";
// import { ToastContainer } from 'react-toastify';
import Searchbar from "./components/Searchbar/Searchbar";
// import Button from './components/Button/Button';
// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
// import Loader from './components/Loader/Loader';

export default class App extends React.Component {
  state = {
    imageName: "",
    showModal: false,
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

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearhFormSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          toggleModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            // src = {this.state.srcForModal}
            // alt = {this.state.altForModal}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
