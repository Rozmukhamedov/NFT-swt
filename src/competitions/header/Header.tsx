import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mantine/core";
import Logo from "assets/images/logo.svg";
import SearchInput from "../search/SearchInput";
import DropdownProfile from "./dropdown-profile/DropdownProfile";
import DropdownLanguage from "./dropdown-language/DropdownLanguage";

function Header() {
  return (
    <div className="header">
      <Container size={"xl"}>
        <div className="header__flex">
          <div className="header__logo">
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <SearchInput />
          <div className="header__end">
            <DropdownProfile />
            <DropdownLanguage />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
