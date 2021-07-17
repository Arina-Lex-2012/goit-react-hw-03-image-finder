import React from "react";
import css from "./Modal.module.css";

export default class Modal extends React.Component {
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
