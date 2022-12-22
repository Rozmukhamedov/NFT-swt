import "./style.css";
import React, { useState } from "react";
import { Dropdown } from "competitions";
import { Container } from "@mantine/core";

function Products() {
  const [title, setTitle] = useState("Валюта");
  return (
    <Container size={"xl"}>
      <div className="products">
        <div className="products__flex">
          <div>
            <Dropdown shadow={"md"} title={title} width={150} position={"bottom-end"} />
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default Products;
