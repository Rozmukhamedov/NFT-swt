import "./style.css";
import React from "react";
import { Button } from "competitions";
import { Link } from "react-router-dom";
import IMG from "assets/images/user.png";
import { ReactComponent as RIGHTICON } from "assets/images/right.svg";
import { ReactComponent as LCOKICON } from "assets/images/coupons/lock.svg";

function Coupons() {
  return (
    <div className="coupons">
      <div className="coupons__flex">
        <h4>NFT-купоны</h4>
        <Button>
          <Link to={"/"}>
            Посмотреть все <RIGHTICON />
          </Link>
        </Button>
      </div>
      <p>
        Kitaro is a collection of 7,777 storytelling NFTs exploring various
        known multiverses in an adventure to unlock secrets of their
        ancestry.Storytelling NFTs with a twist. Our first Augmented Reality
        Coloring Book releases next month. Guess what, we're using your
        characters. Welcome to the Kitaro Community Collaboration Program.F
      </p>
      <div className="coupons__card">
        <div className="coupons__card-flex">
          <img src={IMG} alt="" />
          <div className="coupons__card-text">
            <h4>Kitaro World Official</h4>
            <p>от 0.28 ETH</p>
          </div>
        </div>
        <p>
          Kitaro is a collection of 7,777 storytelling NFTs exploring various
          known multiverses in an adventure to unlock secrets of their
          ancestry.Storytelling NFTs with a twist. Our first Augmented Reality
          Coloring Book releases next month. Guess what, we're using your
          characters. Welcome to the Kitaro Community Collaboration Program.
        </p>
      </div>
      <div className="coupons__hero">
        <div>
          <h1>Колесо фортуны</h1>
          <h2>Крути и получай гарантированный приз</h2>
        </div>

        <div className="coupons__hero-time">
          <LCOKICON />
          <p>30д 10 ч</p>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
