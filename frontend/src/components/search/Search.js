import React, { useContext, useState, useEffect } from "react";
import Button from "../button/Button";
import { GlobalContext } from "../../context/context";

const Search = () => {
  const { getLocationAutocomplete } = useContext(GlobalContext);
  const [values, setValues] = useState("");

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const handleClick = (values) => {
    getLocationAutocomplete(values);
  };

  return (
    <>
      <div className="search-container">
        <Button value="search" onClick={() => handleClick(values)} />
        <input
          className="search-input"
          type="text"
          placeholder="search city"
          name="input"
          value={values}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default Search;
