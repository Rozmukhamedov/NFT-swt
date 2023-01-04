import "./style.css";
import BG from "./bg.png";
import Marker from "./marker1.png";
import { Button } from "components";
import WheelImage from "./wheel1.png";
import React, { FC, useRef, useState } from "react";
import { ReactComponent as Close } from "assets/images/close.svg";
import { useViewportSize } from "@mantine/hooks";

type WheelProps = {
  setOpened: (e: boolean) => void;
};

const Wheel: FC<WheelProps> = ({ setOpened }) => {
  const { width } = useViewportSize();
  const [win, setWin] = useState("");
  const [regulations, setRegulations] = useState(false);
  const wheel = useRef<any>(null);

  let deg = 0;
  let zoneSize = 45;

  const symbolSegments: any = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
  };

  const handleWin = (actualDeg: any) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    console.log(symbolSegments[winningSymbolNr]);

    setWin(symbolSegments[winningSymbolNr]);
  };

  const startFunc = () => {
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.current.style.transition = "all 10s ease-out";
    wheel.current.style.transform = `rotate(${deg}deg)`;
    wheel.current.classList.add("blur");
    function timeOut() {
      onChangeFunctionn(deg);
    }
    setTimeout(timeOut, deg + 4000);
  };

  const onChangeFunctionn = (deg: any) => {
    wheel.current.classList.remove("blur");
    wheel.current.style.transition = "none";
    const actualDeg = deg % 360;
    wheel.current.style.transform = `rotate(${actualDeg}deg)`;

    handleWin(actualDeg);
  };

  return (
    <>
      <div
        className="wheel__popup"
        style={
          width > 992
            ? { background: `url(${BG})`, backgroundRepeat: "no-repeat" }
            : {}
        }
      >
        <div className="wheel__carousel">
          <img className="marker" src={Marker} />
          <img className="wheel" ref={wheel} src={WheelImage} />
        </div>
        <div className="wheel__texts">
          <h1>Колесо фортуны</h1>
          <p>Крути и получай гарантированный приз</p>

          {!!win ? (
            <div className="result">
              <p>Ваш выигрыш: </p>
              <p>{win}</p>
            </div>
          ) : (
            <Button type="button" onClick={startFunc}>
              Крутить
            </Button>
          )}

          <span onClick={() => setRegulations(!regulations)}>
            Правила участия
          </span>
          {regulations ? (
            <div className="regulations">
              <p>Текст правил</p>
            </div>
          ) : null}
        </div>
        <Button
          type="button"
          className="close__button"
          onClick={() => setOpened(false)}
        >
          <Close />
        </Button>
      </div>
      <div className="wheel__bg"></div>
    </>
  );
};

export default Wheel;
