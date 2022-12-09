import "./style.css";
import React from "react";
import { Button } from "competitions";

function Coupons() {
  return (
    <div className="coupons">
      <div className="coupons__flex">
        <h4>NFT-купоны</h4>
        <Button>Посмотреть все</Button>
      </div>
      <p>
        Kitaro is a collection of 7,777 storytelling NFTs exploring various
        known multiverses in an adventure to unlock secrets of their
        ancestry.Storytelling NFTs with a twist. Our first Augmented Reality
        Coloring Book releases next month. Guess what, we're using your
        characters. Welcome to the Kitaro Community Collaboration Program.F
      </p>
      <div className="coupons__card"></div>
      <div className="coupons__hero"></div>
    </div>
  );
}

export default Coupons;
