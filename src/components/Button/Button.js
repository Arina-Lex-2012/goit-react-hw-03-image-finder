import React from "react";
import css from "./Button.module.css";

export default class Button extends React.Component {
  render() {
    return (
      <button type="button" className={css.button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}
