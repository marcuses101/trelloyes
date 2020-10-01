import React from "react";
import "./Card.css";

function Card(props) {
  const { title, content, remove } = props;
  return (
    <div className="Card">
      <button type="button" onClick={remove}>delete</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;
