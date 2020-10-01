import React, { useState } from "react";
import "./App.css";
import List from "./compositions/List";

function App(props) {
  const { store } = props;
  const {lists} = store;
  const [allCards, setAllCards] = useState(store.allCards);
  console.log()

  function newRandomCard () {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  function addToAllCards (newCard) {
    setAllCards(allCards=> {
      const newCards = {...allCards};
      newCards[newCard.id] = newCard;
      return newCards;
    })
  }

  const listsJSX = lists.map(list => {
    return (
      <List
        key={list.id}
        header={list.header}
        cardIds={list.cardIds}
        allCards={allCards}
        random={newRandomCard}
        add={addToAllCards}
      />
    );
  });

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{listsJSX}</div>
    </main>
  );
}

export default App;
