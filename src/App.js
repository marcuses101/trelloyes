import React from "react";
import "./App.css";
import List from "./compositions/List";

function App(props) {
  const { store } = props;
  const listsJSX = store.lists.map(list=>{
    return (
      <List
      key={list.id}
      header={list.header}
      cards={list.cardIds.map(id=> store.allCards[id])}
      />
    )
  })

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listsJSX}
      </div>
    </main>
  );
}

export default App;
