import React from "react";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";

const index = () => {
  return (
    <div>
      <Header />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default index;
