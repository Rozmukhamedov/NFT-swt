import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "components";
import { ReactComponent as AICON } from "assets/images/apple.svg";
import { ReactComponent as FICON } from "assets/images/facebook.svg";
import { ReactComponent as GICON } from "assets/images/google.svg";

function Registr({ form }: any) {
  return (
    <>
      <div className="registration__box">
        <h4>Зарегистрироваться</h4>
        <div className="registration__box-icons">
          <a href="#">
            <FICON />
          </a>
          <a href="#">
            <GICON />
          </a>
          <a href="#">
            <AICON />
          </a>
        </div>
        <div className="registration__border">
          <p>или</p>
        </div>
        <form className="registration__form">
          <div className="registration__input">
            <p>Имя пользователя</p>
            <Input
              placeholder="Имя пользователя"
              type="text"
              name="login"
              form={form}
            />
          </div>
          <div className="registration__input">
            <p>Почта</p>
            <Input
              placeholder="Электронный адрес"
              type="email"
              name="email"
              form={form}
            />
          </div>
          <div className="registration__input">
            <p>Пароль</p>
            <Input
              placeholder="Не менее 6 символов"
              type="password"
              name="password"
              form={form}
            />
          </div>
          <div className="registration_btns">
            <Button type="submit" className="btn">
              Регистрация
            </Button>
            <Button type="button" className="button">
              <Link to="/login">Вход</Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registr;
