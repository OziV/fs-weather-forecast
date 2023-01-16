import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/context";

export const List = (data) => {
  const { getFavoriteByName, getCurrentWeather } = useContext(GlobalContext);
  const [favoritesList, setFavoritesList] = useState();
  const [isMain, setIsMain] = useState(false);

  const handleClick = (cityData, cityName) => {
    if (!isMain) {
      getFavoriteByName(cityData);
    }
    if (isMain) {
      getCurrentWeather(cityData, cityName);
    }
  };

  useEffect(() => {
    if (!isMain) {
      setFavoritesList(data.searchResultsData);
    } else {
      setFavoritesList(data.searchResults);
    }
  }, [data]);

  useEffect(() => {
    setIsMain(data.isMain);
  }, [data.isMain]);

  const textBuilder = (item, index) => {
    if (!isMain) {
      return (
        <li key={index}>
          <button className="list-btn" onClick={() => handleClick(item.city)}>
            {item.city}
          </button>
        </li>
      );
    }

    if (isMain && item.Key !== null) {
      return (
        <li key={index}>
          <button
            className="list-btn"
            onClick={() => handleClick(item.Key, item.LocalizedName)}
          >
            {item.LocalizedName}
          </button>
        </li>
      );
    }
  };

  return (
    <>
      <div className="ul-container">
        <div className="divider"></div>
        <div className="list-items">
          <ul>
            {favoritesList
              ? favoritesList.map((item, index) => {
                  return textBuilder(item, index);
                })
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
};
export default List;
