import "./index.scss";
import React, { useState, useEffect } from "react";

const menuItems = [
  {
    label: "Home",
  },
  {
    label: "Test",
  },
  {
    label: "Settings",
  },
];

const selectionItems = [
  {
    label: "Item1",
  },
  {
    label: "Item2",
  },
  {
    label: "Item3",
  },
];

const App = () => {
  const [size, setSize] = useState("16px");

  const updateSize = () => {
    const area = document.body.clientHeight * document.body.clientWidth;
    const newArea = area > 300000 ? 16 : 12; // Should create a sort of media query for react native
    setSize(`${newArea}px`);
  };

  const isBrowser = () => typeof window !== "undefined";

  isBrowser() && window.addEventListener("resize", updateSize);

  useEffect(() => {
    document.documentElement.style.fontSize = size;
  }, [size]);

  const overlay = () => {
    return (
      <div className="Overlay">
        select device on devtools too
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        root
      </div>
    );
  };
  return (
    <div className="App">
      {overlay()}
      <header className="App-Content">
        <h1>Responsive Mobile Test</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consequatur esse molestiae, ipsum assumenda ex id earum similique
          beatae ipsam magnam eius enim, fugit impedit labore distinctio in quod
          aliquam.
        </p>
        <p class="Other-size-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consequatur esse molestiae, ipsum assumenda ex id earum similique
          beatae ipsam magnam eius enim, fugit impedit labore distinctio in quod
          aliquam.
        </p>
        <div className="App-selection ">
          {selectionItems.map((obj) => {
            return <div className="Box">{obj.label}</div>;
          })}
        </div>
        <div className="App-Menu">
          {menuItems.map((obj) => {
            return <p>{obj.label}</p>;
          })}
        </div>
      </header>
    </div>
  );
};

export default App;
