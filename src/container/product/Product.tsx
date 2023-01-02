import "./style.css";
import { Modal } from "@mantine/core";
import { Button } from "components";
import React, { FC, useState } from "react";
import IMG from "assets/images/product.png";
import { ReactComponent as Close } from "assets/images/close.svg";

type ProductProps = {
  opened: boolean;
  setOpened: (e: boolean) => void;
};

const Product: FC<ProductProps> = ({ opened, setOpened }) => {
  return (
    <>
      <Modal
        withCloseButton={false}
        opened={opened}
        centered
        onClose={() => setOpened(false)}
      >
        <div className="product">
          <img src={IMG} alt={"image"} />
          <div className="close__button">
            <Close />
          </div>
          <div className="flex">
            <h3>Kitaro World Official</h3>
            <p>0.28 ETH</p>
          </div>

          <Button>Купить на OpenSea</Button>
        </div>
      </Modal>
    </>
  );
};

export default Product;
