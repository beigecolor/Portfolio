import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Index from "./index/Index";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Blog /> */}
      <Index />
      <Footer />
    </div>
  );
}

export default App;
