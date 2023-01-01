import "./style.css";
import React from "react";
import { Button } from "components";
import { Link } from "react-router-dom";
import { ReactComponent as SICON } from "assets/images/success.svg";

function RegistrSuccess() {
  return (
    <div className="success">
      <h3>
        <span>@username</span>, поздравляем!
      </h3>
      <div className="success__flex">
        <h3>
          Вы успешно прошли <br /> регистрацию
        </h3>
        <SICON />
      </div>
      <Button>
        <Link to="/login">Вернуться на главную</Link>
      </Button>
    </div>
  );
}

export default RegistrSuccess;
