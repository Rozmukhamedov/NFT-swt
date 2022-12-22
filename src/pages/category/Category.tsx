import "./style.css";
import React from "react";
import { Card } from "competitions";
import IMG from "assets/images/category.png";
import { Container, Grid } from "@mantine/core";

function Category() {
  const date = [
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
    {
      image: IMG,
      title: "Kitaro World Official",
      price: "0.28 ETH",
      new: "Новый год",
    },
  ];
  return (
    <Container size={"xl"}>
      <div className="category">
        <div className="category__img">
          <img src={IMG} alt="image" />
        </div>
        <Container>
          <h2>Название категории</h2>
          <p className="p">Описание</p>
        </Container>

        <Grid style={{marginBottom: "30px"}}>
          {date?.map((d: any, index: number) => (
            <Grid.Col span={6} md={4} key={index}>
              <Card
                image={d.image}
                title={d.title}
                price={d.price}
                new_d={d.new}
              />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Category;
