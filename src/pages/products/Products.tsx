import "./style.css";
import React, { useState } from "react";
import { Button, Dropdown } from "components";
import { Container, Input } from "@mantine/core";
import { ReactComponent as Sort1 } from "assets/images/sort1.svg";
import { ReactComponent as Sort2 } from "assets/images/sort2.svg";

function Products() {
  const [title, setTitle] = useState("");
  const data = [
    {
      index: 1,
      value: "ETH",
    },
    {
      index: 2,
      value: "ETH",
    },
    {
      index: 3,
      value: "ETH",
    },
    {
      index: 4,
      value: "ETH",
    },
  ];
  return (
    <Container size={"xl"}>
      <div className="products">
        <div className="products__flex">
          <div className="left">
            <Dropdown
              shadow={"md"}
              title={"Валюта"}
              width={150}
              position={"bottom-end"}
              items={data}
              onClick={(e: any) => console.log(e)}
            />
            <Input className="input" />
            <Input className="input" />
            <Dropdown
              shadow={"md"}
              title={"Категория"}
              width={150}
              position={"bottom-end"}
              items={data}
              onClick={(e: any) => console.log(e)}
            />
            <Button>Очистить все</Button>
          </div>
          <div className="right">
            <Button>
              <Sort1 />
            </Button>
            <Button>
              <Sort2 />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Products;
