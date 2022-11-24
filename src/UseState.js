import React from "react";
import { useState } from "react";

const UseState = () => {
  let [number, setNumber] = useState(0);
  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const [showText, setShowText] = useState(true);

  const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <h1>Contoh Pertama</h1>
      <p>{number}</p>
      <button onClick={increaseNumber}>Increase Number</button>
      <br />
      <br />
      <br />

      <h1>Contoh Kedua</h1>
      <input type="text" onChange={handleInputChange} />
      <p>{inputValue}</p>
      <br />
      <br />
      <br />

      <h1>Contoh Ketiga</h1>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/hide
      </button>
      {showText && <h2>Dimas Dwi Putra</h2>}
      <br />
      <br />
      <br />

      <h1>Contoh Keempat</h1>
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "blue" : "black");
        }}
      >
        Change Color
      </button>
      <h2 style={{ color: textColor }}>Dimas Dwi Putra</h2>
      <br />
      <br />
      <br />
    </div>
  );
};

export default UseState;
