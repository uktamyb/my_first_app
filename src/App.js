import React, { useState } from "react";
import "./styles/App.css";

function App() {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Uktam");
  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }
  return (
    <div className="app w-50 mx-auto">
      <h3>Count: {count}</h3>
      <button onClick={inc} className="btn btn-success">
        Qo'shish
      </button>
      <button onClick={dec} className="btn btn-danger">
        Ayirish
      </button>
      <hr />
      <h3>Value: {value}</h3>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
