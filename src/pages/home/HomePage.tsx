import "./style.css";
import React from "react";
import { Container } from "@mantine/core";
import { Category, Coupons } from "container";

function HomePage() {
  return (
    <Container size={"xl"}>
      <Coupons />
      <Category />
    </Container>
  );
}

export default HomePage;
