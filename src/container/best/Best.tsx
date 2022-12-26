import "./style.css";
import React, { useState } from "react";
import { Button } from "competitions";
import IMG from "assets/images/product.png";
import { ReactComponent as RIGHTICON } from "assets/images/right.svg";

function Best() {
  const [filter, setFilter] = useState("");
  const data = [
    {
      id: 1,
      image: IMG,
      price: 0.28,
      title: "Kitaro World Official",
      description:
        "Kitaro is a collection of 7,777 storytelling NFTs exploring various known multiverses in an adventure to unlock secrets of their ancestry.Storytelling NFTs with a twist. Our first Augmented Reality Coloring Book releases next month. Guess what, we're using your characters. Welcome to the Kitaro Community Collaboration Program. ",
    },
    {
      id: 2,
      image: IMG,
      price: 0.28,
      title: "Kitaro World Official",
      description:
        "Kitaro is a collection of 7,777 storytelling NFTs exploring various known multiverses in an adventure to unlock secrets of their ancestry.Storytelling NFTs with a twist. Our first Augmented Reality Coloring Book releases next month. Guess what, we're using your characters. Welcome to the Kitaro Community Collaboration Program. ",
    },
    {
      id: 3,
      image: IMG,
      price: 0.28,
      title: "Kitaro World Official",
      description:
        "Kitaro is a collection of 7,777 storytelling NFTs exploring various known multiverses in an adventure to unlock secrets of their ancestry.Storytelling NFTs with a twist. Our first Augmented Reality Coloring Book releases next month. Guess what, we're using your characters. Welcome to the Kitaro Community Collaboration Program. ",
    },
    {
      id: 4,
      image: IMG,
      price: 0.28,
      title: "Kitaro World Official",
      description:
        "Kitaro is a collection of 7,777 storytelling NFTs exploring various known multiverses in an adventure to unlock secrets of their ancestry.Storytelling NFTs with a twist. Our first Augmented Reality Coloring Book releases next month. Guess what, we're using your characters. Welcome to the Kitaro Community Collaboration Program. ",
    },
    {
      id: 5,
      image: IMG,
      price: 0.28,
      title: "Kitaro World Official",
      description:
        "Kitaro is a collection of 7,777 storytelling NFTs exploring various known multiverses in an adventure to unlock secrets of their ancestry.Storytelling NFTs with a twist. Our first Augmented Reality Coloring Book releases next month. Guess what, we're using your characters. Welcome to the Kitaro Community Collaboration Program. ",
    },
  ];

  return (
    <div className="best">
      <div className="best__flex">
        <h2>Лучшее</h2>
        <Button type="button">
          Посмотреть все <RIGHTICON />
        </Button>
      </div>
      <div className="best__filter">
        <Button
          type="button"
          className={filter === "best" ? `active` : ""}
          onClick={() => setFilter("best")}
        >
          Самые популярные
        </Button>
        <Button
          type="button"
          className={filter === "sold" ? `active` : ""}
          onClick={() => setFilter("sold")}
        >
          Самые продаваемые
        </Button>
      </div>
      <div className="best__cards">
        {data?.map((product: any) => (
          <div key={product.id} className="best__card">
            <div className="best__card-flex">
              <img src={product.image} alt="" />
              <h3>
                {product?.title} <br /> <span>от {product?.price} ETH</span>
              </h3>
            </div>
            <p>{product?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;
