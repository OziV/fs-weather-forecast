import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import List from "../../components/list/List";
import Section from "../../components/section/Section";

export const Favorites = () => {
  const { searchResults, getAllFavorites } = useContext(GlobalContext);
  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    getAllFavorites();
  }, []);

  return (
    <>
      <h3 className="title">Favorites</h3>
      <div className="page-center">
        <Section isMain={isMain} />
        <List searchResultsData={searchResults} isMain={isMain} />
      </div>
    </>
  );
};

export default Favorites;
