import React, { useEffect } from "react";
import "./Content.css";

const Content = ({ comment, zmienNapis, setZmienNapis }) => {
  useEffect(() => {
    setTimeout(() => {
      setZmienNapis("niezwykły");
    }, 5000);
  });

  return (
    <div className="content-container">
      <h1>Content</h1>
      <h2>To z app.js</h2>
      <h3>{comment}</h3>
      <h4>{zmienNapis}</h4>
      {zmienNapis === "zwykły" ? <h5>Jest zwykły</h5> : <h5>Jest niezwykły</h5>}
    </div>
  );
};

export default Content;
