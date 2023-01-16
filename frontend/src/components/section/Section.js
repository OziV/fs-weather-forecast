import React from "react";
import Button from "../../components/button/Button";
import icon from "../../images/favorites.png";

const Section = () => {
  return (
    <>
      <div className="main-container">
        <div className="row-left">
          <h5>Tel Aviv</h5>
          <div className="row-info">
            <h5>36</h5>
            <h5>sunny</h5>
          </div>
        </div>
        <div className="row-favorite">
          <img src={icon} alt="Logo" />
        </div>
        <div className="row-btn">
          <Button value="add to favorites" />
        </div>
      </div>
    </>
  );
};

export default Section;
