import React, { useState } from "react";
import "./Homepage.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "../requests";

function Homepage() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="homepage">
      <Header activeIcon={"Home"} />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default Homepage;
