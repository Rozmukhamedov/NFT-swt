import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mantine/core";
import { ethers } from "ethers";
import Logo from "assets/images/logo.svg";
import SearchInput from "../search/SearchInput";
import DropdownProfile from "./dropdown-profile/DropdownProfile";
import DropdownLanguage from "./dropdown-language/DropdownLanguage";

function Header() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };


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
