import React from "react";
import css from "./Searchbar.module.css";

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
            value={this.state.imageName}
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
