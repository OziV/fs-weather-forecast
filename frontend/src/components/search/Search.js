import React from "react";
import Button from "../button/Button";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <Button value="search"/>
        <input className="search-input"></input>
      </div>
    </>
  );
};

export default Search;
