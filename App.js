import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  //add thought function
  const addThought = thought => {
    setThoughts((prevThought) =>  [thought, ...prevThought]);
  }

  //remove thought function
  const removeThought = thoughtIdToRemove => {
    setThoughts(prevThoughts =>
      prevThoughts.filter((thought) => (thought.id !== thoughtIdToRemove))
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought removeThought= {removeThought} key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));