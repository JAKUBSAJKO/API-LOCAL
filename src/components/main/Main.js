import React, { useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = ({ pytanie, setPytanie }) => {
  useEffect(() => {
    console.clear();
    localStorage.clear();
  });
  return (
    <div className="main-container">
      <h1>Strona główna</h1>
      <Link to="/api">
        <button onClick={() => setPytanie("animals")}>Animals</button>
      </Link>
      <Link to="/api">
        <button onClick={() => setPytanie("colors")}>Colors</button>
      </Link>
      <Link to="/api">
        <button onClick={() => setPytanie("vehicles")}>vehicles</button>
      </Link>
    </div>
  );
};

export default Main;
