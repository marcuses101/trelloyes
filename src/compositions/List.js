import React, { useState } from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  const { header, allCards, random, add } = props;
  const [cardIds, setCardIds] = useState(props.cardIds);

  function removeCard(cardId) {
    setCardIds((cardIds) => cardIds.filter((id) => id !== cardId));
  }

  function handleAddClick(){
    const newCard = random();
    add(newCard);
    setCardIds(ids=>[...ids,newCard.id])
  }

  const cards = cardIds?.map((cardId) => {
    const cardObject = allCards[cardId];
    return (
      <Card
        title={cardObject.title}
        content={cardObject.content}
        key={cardObject.id}
        remove={() => {
          removeCard(cardObject.id);
        }}
      />
    );
  });

  return (
    <section className="List">
      <header className="List-header">
        <h2>{header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button
          type="button"
          className="List-add-button"
          onClick={handleAddClick}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
