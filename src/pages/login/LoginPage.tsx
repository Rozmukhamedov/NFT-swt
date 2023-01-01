import "./style.css";
import React from "react";
import { Button, Input } from "components";
import { Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ReactComponent as AICON } from "assets/images/apple.svg";
import { ReactComponent as FICON } from "assets/images/facebook.svg";
import { ReactComponent as GICON } from "assets/images/google.svg";
import { Link } from "react-router-dom";

function LoginPage() {
  const form = useForm({
    initialValues: { login: "" },
    validate: {
      login: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <Container size="xl">
      <div className="login">
        <div className="login__box">
          <div className="login__text">
            <h4>Войти</h4>
            <div className="login__text-icons">
              <a href="#">
                <AICON />
              </a>
              <a href="#">
                <FICON />
              </a>
              <a href="#">
                <GICON />
              </a>
            </div>
          </div>
          <div className="login__border">
            <p>или</p>
          </div>
          <form className="login__form">
            <div className="login__input">
              <p>Логин</p>
              <Input type="text" name="login" form={form} />
            </div>
            <div className="login__input">
              <div className="login__input-flex">
                <p>Пароль</p>
                <Link to="">Восстановить пароль</Link>
              </div>
              <Input type="text" name="login" form={form} />
            </div>
            <div className="login_btns">
              <Button type="submit" className="btn">
                Войти
              </Button>
              <Button type="button" className="button">
                <Link to="registr">Регистрация</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
