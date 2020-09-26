import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";

function Header({ activeIcon }) {
  return (
    <div className="header">
      <div className="header_icons">
        <Link to="/" className="header_link">
          <div
            className={`header_icon ${
              activeIcon === "Home" ? "header_icon--active" : null
            }`}
          >
            <HomeIcon />
            <p>Home</p>
          </div>
        </Link>
        <div className="header_icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header_icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header_icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <Link to="/search" className="header_link">
          <div
            className={`header_icon ${
              activeIcon === "Search" ? "header_icon--active" : null
            }`}
          >
            <SearchIcon />
            <p>Search</p>
          </div>
        </Link>

        <div className="header_icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          alt=""
          className="header_logo"
        />
      </Link>
    </div>
  );
}

export default Header;
