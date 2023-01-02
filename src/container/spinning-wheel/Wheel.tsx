import React, { useState, useEffect } from "react";

function Wheel() {
  // Set up state variables
  const [prizes] = useState(["A", "B", "C", "D", "E"]);
  const [currentPrize, setCurrentPrize] = useState<any>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [intervalId, setIntervalId] = useState<any>(null);

  // Function to spin the wheel
  function spin() {
    setIsSpinning(true);
    setIntervalId(
      setInterval(() => {
        // Update current prize to a random value
        setCurrentPrize(prizes[Math.floor(Math.random() * prizes.length)]);
      }, 100)
    );
  }

  // Function to stop the wheel
  function stop() {
    clearInterval(intervalId);
    setIsSpinning(false);
  }

  // Use the useEffect hook to stop the wheel after a random amount of time
  useEffect(() => {
    if (isSpinning) {
      const timeoutId = setTimeout(stop, Math.random() * 2000 + 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSpinning]);

  return (
    <div>
      {/* Render the wheel using the HTML canvas element */}
      <canvas id="wheel" width="200" height="200"></canvas>
      {/* Display the current prize */}
      {currentPrize && <p>You have won: {currentPrize}</p>}
      {/* Render the spin button */}
      {!isSpinning && <button onClick={spin}>Spin</button>}
    </div>
  );
}

export default Wheel;
