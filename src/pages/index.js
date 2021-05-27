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
  const [showText, setShowText] = useState(false);

  const updateSize = () => {
    const area = document.body.clientHeight * document.body.clientWidth;
    const newArea = area > 1000000 ? 24 : area > 300000 ? 16 : 12; // Should create a sort of media query for react native
    setSize(`${newArea}px`);
  };

  const isBrowser = () => typeof window !== "undefined";

  isBrowser() && window.addEventListener("resize", updateSize);

  useEffect(() => {
    const isBrowser = () => typeof window !== "undefined";
    isBrowser && updateSize();
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = size;
  }, [size]);

  const overlay = () => {
    return (
      <div className="Overlay">
        <button
          onClick={() => {
            setShowText((prevState) => !prevState);
          }}
        >
          Toggle Text
        </button>
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
        {showText ? (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              consequatur esse molestiae, ipsum assumenda ex id earum similique
              beatae ipsam magnam eius enim, fugit impedit labore distinctio in
              quod aliquam.
            </p>
            <p className="Other-size-font">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              consequatur esse molestiae, ipsum assumenda ex id earum similique
              beatae ipsam magnam eius enim, fugit impedit labore distinctio in
              quod aliquam.
            </p>
            <p style={{ fontSize: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              consequatur esse molestiae, ipsum assumenda ex id earum similique
              beatae ipsam magnam eius enim, fugit impedit labore distinctio in
              quod aliquam.
            </p>
          </>
        ) : (
          <>
            <img
              src="https://images.unsplash.com/photo-1621569976463-2347d40c6122?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              alt="not an advertisement"
              className="Image"
            />
            <p className="Other-size-font">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        )}

        <div className="App-selection ">
          {selectionItems.map((obj) => {
            return (
              <div className="Box" key={obj.label}>
                {obj.label}
              </div>
            );
          })}
        </div>
        <div className="App-Menu">
          {menuItems.map((obj) => {
            return <p key={obj.label}>{obj.label}</p>;
          })}
        </div>
      </header>
    </div>
  );
};

export default App;
