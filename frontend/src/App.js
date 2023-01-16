import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/list/List";
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";
import Favorites from "./pages/favorites/Favorites";
import Main from "./pages/main/Main";
import Error from "./pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
