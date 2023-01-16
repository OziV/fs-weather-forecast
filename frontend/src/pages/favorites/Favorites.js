import React from "react";
import List from "../../components/list/List";
import Section from "../../components/section/Section";

export const Favorites = () => {
  return (
    <>
      <h3 className="title">Favorites</h3>
      <div className="page-center">
        <Section />
        <List />
      </div>
    </>
  );
};

export default Favorites;
