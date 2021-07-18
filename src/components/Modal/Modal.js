import React from "react";
import css from "./Modal.module.css";

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.props.onClose}>
        <div className={css.modal}>
          {this.props.children}
          <img src="{this.props.srcForModal}" alt="{this.props.altForModal}" />
        </div>
      </div>
    );
  }
}
