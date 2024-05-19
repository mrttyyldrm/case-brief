import React from "react";

function Input(props) {
  return (
    <div className="control-input">
      <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
