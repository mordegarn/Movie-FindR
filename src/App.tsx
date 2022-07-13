import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
