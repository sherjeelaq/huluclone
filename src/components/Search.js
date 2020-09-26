import React, { useState } from "react";
import "./Search.css";
import Header from "./Header";
import Results from "./Results";
import Searchbar from "./Searchbar";
import requests from "../requests";
function Search() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="search">
      <Header activeIcon={"Search"} />
      <Searchbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default Search;
