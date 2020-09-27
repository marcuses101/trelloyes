import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  const { header, cards } = props;

  const cardsJSX = cards?.map((card, index) => (
    <Card title={card.title} content={card.content} key={card.id} />
  ));

  return (
    <section className="List">
      <header className="List-header">
        <h2>{header}</h2>
      </header>
      <div className="List-cards">
        {cardsJSX}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
