import React, { useEffect } from "react";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className="main-container">
      <h1>Strona główna</h1>
    </div>
  );
};

export default Main;
