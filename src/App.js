import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Meme />
      <Footer />
    </div>
  );
}

export default App;
