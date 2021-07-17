import React from "react";
import css from "./Searchbar.module.css";
// import { toast } from 'react-toastify';
//21731016-f00a62a1d829b8e9d99c92f14
//https://pixabay.com/api/?q=что_искать&page=1&key=f00a62a1d829b8e9d99c92f14&image_type=photo&orientation=horizontal&per_page=12

export default class Searchbar extends React.Component {
  state = {
    imageName: "",
  };

  handleNameChange = (event) => {
    this.setState({
      imageName: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.imageName.trim() === "") {
      // toast.error('Enter something in the search box!');
      alert("Enter something in the search box!");
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
