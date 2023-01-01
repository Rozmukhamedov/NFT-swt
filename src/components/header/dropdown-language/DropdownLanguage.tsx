import "./style.css";
import React, { useState } from "react";
import { Checkbox } from "@mantine/core";
import { ReactComponent as RusIcon } from "assets/images/lang/rus.svg";
import { ReactComponent as DropIcon } from "assets/images/header/chevron.svg";

function DropdownLanguage() {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState<any>();

  return (
    <div className="dropdown__lang">
      <div
        className="dropdown__lang-title"
        onClick={() => setDropdown(!dropdown)}
      >
        <RusIcon />
        <p>Ru</p>
        <DropIcon />
      </div>
      {dropdown ? (
        <div className="dropdown__lang-items">
          <div className="dropdown__lang-item">
            <Checkbox
              className="dropdown__lang-checkbox"
              value={"english"}
              onChange={() => setValue("english")}
              indeterminate={false}
              color={"red"}
              checked={value === "english" ? true : false}
            />
            <p>Ru</p>
            <RusIcon />
          </div>
          <div className="dropdown__lang-item">
            <Checkbox
              className="dropdown__lang-checkbox"
              value={"rusian"}
              color={"red"}
              onChange={() => setValue("rusian")}
              checked={value === "rusian" ? true : false}
            />
            <p>En</p>
            <RusIcon />
          </div>
          <div className="dropdown__lang-item">
            <Checkbox
              className="dropdown__lang-checkbox"
              value={"china"}
              color={"red"}
              onChange={() => setValue("china")}
              checked={value === "china" ? true : false}
            />
            <p>Ch</p>
            <RusIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DropdownLanguage;
