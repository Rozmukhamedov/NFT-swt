import "./style.css";
import React from "react";
import { Grid } from "@mantine/core";
import { Button } from "competitions";
import IMG from "assets/images/category.png";
import { ReactComponent as RIGHTICON } from "assets/images/right.svg";
import { Link } from "react-router-dom";

function Category() {
  const date = [
    {
      id: 1,
      image: IMG,
      text: "Название категории",
    },
    {
      id: 2,
      image: IMG,
      text: "Название категории",
    },
    {
      id: 3,
      image: IMG,
      text: "Название категории",
    },
    {
      id: 4,
      image: IMG,
      text: "Название категории",
    },
  ];
  return (
    <div className="category">
      <div className="category__flex">
        <h2>По категории</h2>
        <Button type="button">
          Посмотреть все <RIGHTICON />
        </Button>
      </div>
      <Grid>
        {date?.map((d: any) => (
          <Grid.Col span={12} md={6}>
            <div className="category__card" key={d.index}>
              <Link to={"category"}>
                <img src={d.image} alt={d.text} />
                <h3>{d.text}</h3>
              </Link>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default Category;
