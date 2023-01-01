import "./style.css";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "@mantine/core";
import { ReactComponent as DropIcon } from "assets/images/header/chevron.svg";

type DropdownProps = {
  image?: any;
  width?: number | string;
  shadow: string;
  position?: string;
  title: string;
  items?: any;
  onClick?: any;
};

const Dropdown: FC<DropdownProps> = ({
  image,
  width,
  shadow,
  position,
  title,
  items,
  onClick,
}) => {
  return (
    <div className="dropdown">
      <Menu shadow={shadow} width={width} position={"bottom-start"}>
        <Menu.Target>
          <Button className="dropdown__open" variant="subtle">
            {image ? <img src={image} alt="" /> : null}
            <p>{title}</p>
            <DropIcon />
          </Button>
        </Menu.Target>

        <Menu.Dropdown className="dropdown__items">
          {items?.map((item: any) => (
            <Menu.Item
              key={item?.index}
              className="dropdown__item"
              onClick={() => onClick(item)}
            >
              {item?.value}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Dropdown;
