import React, { useRef } from "react";
import "./style.css";
import Marker from "./marker1.png";
import WheelImage from "./wheel1.png";
import ButtonImage from "./button.png";

function Wheel() {
  const wheel = useRef<any>(null);
  const startButton = useRef<any>(null);
  const display = useRef<any>(null);

  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
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
    display.current.innerHTML = symbolSegments[winningSymbolNr];
  };

  const startFunc = () => {
    display.current.innerHTML = "-";
    startButton.current.style.pointerEvents = "none";
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

    startButton.current.style.pointerEvents = "auto";
    wheel.current.style.transition = "none";
    const actualDeg = deg % 360;
    wheel.current.style.transform = `rotate(${actualDeg}deg)`;

    handleWin(actualDeg);
  };

  return (
    <div id="app">
      <img className="marker" src={Marker} />
      <img className="wheel" ref={wheel} src={WheelImage} />
      <img
        className="button"
        onClick={startFunc}
        ref={startButton}
        src={ButtonImage}
      />
      <div className="display" ref={display}>
        -
      </div>
    </div>
  );
}

export default Wheel;
