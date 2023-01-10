import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mantine/core";
import { ethers } from "ethers";
import Logo from "assets/images/logo.svg";
import SearchInput from "../search/SearchInput";
import DropdownProfile from "./dropdown-profile/DropdownProfile";
import DropdownLanguage from "./dropdown-language/DropdownLanguage";
import { useAuthContext } from "context/AuthProvider";

function Header() {
  const { connectWallet, accountBalance }: any = useAuthContext();

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
            <button onClick={connectWallet}>connect</button>
            {accountBalance}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
