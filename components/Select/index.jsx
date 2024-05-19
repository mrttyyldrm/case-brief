import React, { useState } from "react";

function Select(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedRole, setselectedRole] = useState({
    id: props.selectedRole?.id,
    text: props.selectedRole?.text,
  });

  const selectRole = (id, text) => {
    props.onSelectHandler(id, text);
    setIsOpened(false);
    setselectedRole({ id: id, text: text });
  };

  return (
    <div className="control-select">
      <div className="select-input" onClick={() => setIsOpened(!isOpened)}>
        <input
          type="text"
          placeholder={props.placeholder}
          readonly="true"
          value={selectedRole.text}
        />
        <i className="fa-solid fa-angle-down"></i>
      </div>
      {isOpened && (
        <ul className="select-options" onMouseLeave={() => setIsOpened(false)}>
          {props.options.map((option, index) => (
            <li
              key={index}
              roleid={option.id}
              className={selectedRole.id === option.id ? "active" : ""}
              onClick={() => selectRole(option.id, option.text)}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
