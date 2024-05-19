import React from "react";

function Button(props) {
  return (
    <button
      className={props.type !== undefined ? props.type : ""}
      onClick={props.onClick}
    >
      {props.icon !== undefined && <i className={props.icon}></i>}
      {props.text !== undefined && <p>{props.text}</p>}
    </button>
  );
}

export default Button;
