import React from "react";
import { useState } from "react";
import "./Header.css";
import { SlMenu } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidVideoPlus } from "react-icons/bi";
import { MdOutlineApps } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Avatar } from "@mui/material";
import { BrowserRouter, NavLink } from "react-router-dom";

function Header() {

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
        
      <div className="header__left">
        <SlMenu />
        <NavLink to='/'>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
        </NavLink>
        
      </div>

      <div className="header__input">
        <input 
        type="text" 
        placeholder="Search"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        />
        <NavLink to={`/search/${inputSearch}`}>
        <IoSearchOutline 
        className="header__inputButton"
        />
        </NavLink>
      </div>

      <div className="header__icons">
        <BiSolidVideoPlus className="header__icon" />
        <MdOutlineApps className="header__icon" />
        <IoIosNotifications className="header__icon" />
        <Avatar 
        className="header__icon__avatar"
        alt="Shams"
        src="https://lh3.googleusercontent.com/ogw/ANLem4bAwIh8hI08ekRdW412L8r5vSPL-AqRng7SLoTDtg=s32-c-mo"
        />
      </div>
    </div>
  );
}

export default Header;
