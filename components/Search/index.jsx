import React from "react";
import Input from "../Input";

function Search(props) {
  return (
    <article id="search">
      <div id="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div id="search-content">
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => props.searchUserHandler(e.target.value)}
        ></Input>
      </div>
    </article>
  );
}

export default Search;
