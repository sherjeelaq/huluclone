import React, { useState } from "react";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css";
import requests from "../requests";

function Searchbar({ setSelectedOption }) {
  const [searchinput, setsearchinput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedOption(requests.search + encodeURIComponent(searchinput));
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a movie..."
          type="text"
          className="searchbar_input"
          value={searchinput}
          onChange={(e) => setsearchinput(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="searchbar_button"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}

export default Searchbar;
