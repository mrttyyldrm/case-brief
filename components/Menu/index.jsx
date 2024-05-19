import React from "react";

function Menu(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li
          key={index}
          className={item.isActive ? "active" : ""}
          roleid={item.id}
          onClick={() => props.onFilterUserHandler(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
