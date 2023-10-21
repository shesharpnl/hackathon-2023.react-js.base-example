import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route  path="/" element={<Home />}></Route>
          <Route  path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
