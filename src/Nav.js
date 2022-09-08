import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [show, blackshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        blackshow(true);
      } else 
        blackshow(false);
    });
    return () => {
      //window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://i.imgur.com/NvpJfif.png"
        alt="Remflix Logo"
      />

      <div className="Home">Home</div>

      <div className="TVshows">TV Shows</div>

      <div className="Movies">Movies</div>

      <div className="Latest">Latest</div>

      <div className="MyList">My List</div>

      <div className="Gift">
        <FontAwesomeIcon icon={faGift} />
      </div>

      <div className="Bell">
        <FontAwesomeIcon icon={faBell} />
      </div>

      <div className="SearchIcon">
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Remflix Logo"
      />
    </div>
  );
}

export default Nav;
