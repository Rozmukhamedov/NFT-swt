import "./style.css";
import React from "react";
import { Button, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import ImgUser from "../../../assets/images/user.png";

function DropdownProfile() {
  return (
    <div className="dropdown">
      <Menu shadow="md" width={200} position="bottom-end">
        <Menu.Target>
          <Button className="dropdown__btn" variant="subtle">
            <img src={ImgUser} alt="" />
          </Button>
        </Menu.Target>

        <Menu.Dropdown className="dropdown__items">
          <Link to="/login">
            <Menu.Item className="dropdown__item">Войти</Menu.Item>
          </Link>
          <Link to="registr">
            <Menu.Item className="dropdown__item">Регистрация</Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default DropdownProfile;
