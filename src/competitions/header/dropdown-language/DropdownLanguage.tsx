import "./style.css";
import React, { useState } from "react";
import { Checkbox } from "@mantine/core";
import { ReactComponent as DropIcon } from "../../../assets/images/header/chevron.svg";
import { ReactComponent as RusIcon } from "../../../assets/images/lang/rus.svg";

function DropdownLanguage() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdown__lang">
      <div
        className="dropdown__lang-title"
        onClick={() => setDropdown(!dropdown)}
      >
        <p>Ru</p>
        <DropIcon />
      </div>
      {dropdown ? (
        <div className="dropdown__lang-items">
          <div className="dropdown__lang-item">
            <Checkbox
              className="dropdown__lang-checkbox"
              value={"english"}
              onChange={(e) => console.log(e.target.value)}
            />
            <p>Ru</p>
            <RusIcon />
          </div>
          <div className="dropdown__lang-item">
            <Checkbox
              className="dropdown__lang-checkbox"
              value={"english"}
              onChange={(e) => console.log(e.target.value)}
            />
            <p>Ru</p>
            <RusIcon />
          </div>
          <div className="dropdown__lang-item">
            <Checkbox
              className="dropdown__lang-checkbox"
              value={"english"}
              onChange={(e) => console.log(e.target.value)}
            />
            <p>Ru</p>
            <RusIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DropdownLanguage;
