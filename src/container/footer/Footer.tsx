import "./style.css";
import React from "react";
import { Container } from "@mantine/core";
import Logo from "assets/images/footer/logo.svg";
import { ReactComponent as IICON } from "assets/images/footer/instagram.svg";
import { ReactComponent as FICON } from "assets/images/footer/facebook.svg";
import { ReactComponent as TICON } from "assets/images/footer/twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <Container size={"xl"}>
        <div className="footer__flex">
          <img src={Logo} alt="Smart Wallet Token" />
          <div className="footer__flex-icons">
          <a href="https://www.instagram.com/">
              <IICON />
            </a>
            <a href="https://www.instagram.com/">
              <FICON />
            </a>
            <a href="https://www.instagram.com/">
              <TICON />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
