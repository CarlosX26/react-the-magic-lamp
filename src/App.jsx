import { useState } from "react";
import "./App.css";

function App() {
  const [swicth, setSwicth] = useState(0);

  return (
    <div className="App">
      <div
        onClick={() => setSwicth((prev) => !prev)}
        className={swicth ? "on" : "off"}
      ></div>
    </div>
  );
}

export default App;
