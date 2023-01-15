import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import Card from "./components/Card";

//import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Card
        img="https://react-project-3.dikdns.com/img/katie-zaferes.png"
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
