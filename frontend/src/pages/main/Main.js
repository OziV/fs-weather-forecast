import React from "react";
import List from "../../components/list/List";
import Search from "../../components/search/Search";
import Section from "../../components/section/Section";

const Main = () => {
  return (
    <>
      <Search />
      <div className="page-center">
        <Section />
        <List />
      </div>
    </>
  );
};

export default Main;
