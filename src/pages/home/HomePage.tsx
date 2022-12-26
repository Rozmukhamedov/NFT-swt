import "./style.css";
import React from "react";
import { Container } from "@mantine/core";
import { Best, Category, Coupons } from "container";

function HomePage() {
  return (
    <Container size={"xl"}>
      <Coupons />
      <Best />
      <Category />
    </Container>
  );
}

export default HomePage;
