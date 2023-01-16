import React, { useState, useEffect } from "react";
import axios from "axios";

const rootUrl = process.env.REACT_APP_SERVER_DEV;

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState("666");

  const getAllFavorites = async () => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "get",
        url: `${rootUrl}/favorites`,
      });
      let data = response.data;
      setFavorites(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  const getFavoriteByName = async (city) => {
    setIsLoading(true);
    try {
      let response = await axios({
        method: "post",
        url: `${rootUrl}/favorites`,
        data: city,
      });
      let data = response.data;
      setFavorites(data);
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
        favorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
