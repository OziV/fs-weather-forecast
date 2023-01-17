import React, { useState, useEffect } from "react";
import axios from "axios";

const rootUrl = process.env.REACT_APP_SERVER_DEV;

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cityInfo, setCityInfo] = useState("");

  const getLocationAutocomplete = async (city) => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "get",
        url: `${rootUrl}/weather/find?find=${city}`,
      });
      let data = response.data;
      setSearchResults(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  const getCurrentWeather = async (cityData, cityName) => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "get",
        url: `${rootUrl}/weather/${cityData}/${cityName}`,
      });
      let data = response.data;
      setCityInfo([cityName, data[0]]);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  const getAllFavorites = async () => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "get",
        url: `${rootUrl}/favorites`,
      });
      let data = response.data;
      setSearchResults(data);
      setFavorites(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  const addToFavorites = async (city, temperature, text) => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "post",
        url: `${rootUrl}/favorites`,
        data: {
          city,
          temperature,
          text,
        },
      });
      let data = await response.data;
      setSearchResults(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  const getFavoriteByName = async (cityData) => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "get",
        url: `${rootUrl}/favorites/${cityData}`,
      });
      let data = response.data;
      setCityInfo(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  const removeFavoriteByName = async (city) => {
    try {
      let response = await axios({
        method: "delete",
        url: `${rootUrl}/favorites/${city}`,
      });
      let data = response.data;
      setCityInfo("");
      setSearchResults(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllFavorites();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        getAllFavorites,
        getLocationAutocomplete,
        getCurrentWeather,
        searchResults,
        favorites,
        cityInfo,
        addToFavorites,
        getFavoriteByName,
        removeFavoriteByName,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
