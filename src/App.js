import React from "react";
import "./App.css";
// import { ToastContainer } from 'react-toastify';
import Searchbar from "./components/Searchbar/Searchbar";
// import Button from './components/Button/Button';
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
        <ImageGallery imageName={this.state.imageName} />
        {this.state.showModal && <Modal />}
      </div>
    );
  }
}

// componentDidMount(){
//     // this.setState({ loading: true });

//     // setTimeout(() => {
//     //   fetch('https://pixabay.com/api/?key=21731016-f00a62a1d829b8e9d99c92f14&id=195893')
//     //   .then(response => response.json())
//     //   .then(image => this.setState({
//     //     id: image.hits[0].id,
//     //     webformatURL: image.hits[0].webformatURL,
//     //     largeImageURL: image.hits[0].largeImageURL
//     //     }))
//     //     .finally(() => this.setState({ loading: false }));
//     // }, 1000);
//   };
