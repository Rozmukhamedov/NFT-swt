import "./style.css";
import React from "react";
import { Container } from "@mantine/core";
import { Best, Carousel, Category, Coupons } from "container";
import IMG from "assets/images/product.png";
import Wheel from "container/spinning-wheel";


function HomePage() {
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
    <Container size={"xl"}>
      <Carousel data={data}/>
      <Coupons />
      <Best />
      <Category />
      <Wheel/>
    </Container>
  );
}

export default HomePage;
