import React from "react";
import css from "./Button.module.css";

function Button() {
  return (
    <button type="button" className={css.Button}>
      Load more
    </button>
  );
}

export default Button;

// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
