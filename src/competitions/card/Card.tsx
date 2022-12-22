import "./style.css";
import React, { FC } from "react";
import { Button } from "competitions";

type CardProps = {
  image: any;
  title: string;
  price: string | number;
  new_d: any;
};

const Card: FC<CardProps> = ({ image, title, price, new_d }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="new"><p>{new_d}</p></div>
      <h3>{title}</h3>
      <p>от {price}</p>
      <Button>Купить на OpenSea</Button>
    </div>
  );
};

export default Card;
