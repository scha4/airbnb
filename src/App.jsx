import { useState } from "react";
import react from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Card from "./components/Card";
import data from "./Data.jsx";
import Footer from "./components/Footer";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Body />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
