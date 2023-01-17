import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import Button from "../../components/button/Button";
import icon from "../../images/favorites.png";

const Section = (data) => {
  const {
    isLoading,
    cityInfo,
    favorites,
    addToFavorites,
    removeFavoriteByName,
  } = useContext(GlobalContext);
  const [cityInfoData, setCityInfoData] = useState("");
  const [isMain, setIsMain] = useState(data.isMain);
  const [isSwitch, setIsSwitch] = useState(false);
  let navigate = useNavigate();

  const handleClick = (city, temperature, text, id) => {
    if (!isMain) {
      removeFavoriteByName(city);
    }
    if (isMain) {
      addToFavorites(city, temperature, text);
      setIsMain(false);
      navigate("/favorites");
    }
  };

  useEffect(() => {
    if (!isMain) {
      setCityInfoData(cityInfo);
    }
    if (isMain) {
      setCityInfoData([cityInfo[1]]);
    }
  }, [cityInfo]);

  useEffect(() => {
    setIsSwitch(true);
  }, [isLoading]);

  const textBuilder = (item, index) => {
    if (!isMain) {
      return (
        <div className="main-container" key={index}>
          <div className="row-left">
            <h5>{item.city}</h5>
            <div className="row-info">
              <h5>{item.temperature}</h5>
              <h5>{item.text}</h5>
            </div>
          </div>
          <div className="row-favorite">
            <img src={icon} alt="Logo" />
          </div>
          <div className="row-btn">
            <Button
              value="Remove From Favorites"
              onClick={() => handleClick(item.city)}
            />
          </div>
        </div>
      );
    }

    if (isMain) {
      return (
        <div className="main-container" key={index}>
          <div className="row-left">
            <h5>{cityInfo[0]}</h5>
            <div className="row-info">
              <h5>{item.Temperature.Metric.Value}</h5>
              <h5>{item.WeatherText}</h5>
            </div>
          </div>
          <div className="row-favorite">
            <img src={icon} alt="Logo" />
          </div>
          <div className="row-btn">
            <Button
              value="Add to Favorites"
              onClick={() =>
                handleClick(
                  cityInfo[0],
                  item.Temperature.Metric.Value,
                  item.WeatherText
                )
              }
            />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {!isLoading &&
      cityInfoData[0] !== undefined &&
      cityInfoData.length < 2 ? (
        cityInfoData.map((item, index) => {
          return textBuilder(item, index);
        })
      ) : (
        <div className="main-container">Click on a city to get details</div>
      )}
    </>
  );
};

export default Section;
