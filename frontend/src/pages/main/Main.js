import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import List from "../../components/list/List";
import Search from "../../components/search/Search";
import Section from "../../components/section/Section";

const Main = () => {
  const { searchResults } = useContext(GlobalContext);
  const [isMain, setIsMain] = useState(true);

  return (
    <>
      <Search />
      <div className="page-center">
        <Section isMain={isMain} />
        <List searchResults={searchResults} isMain={isMain} />
      </div>
    </>
  );
};

export default Main;
