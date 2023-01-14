import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import Header from "./Header";
import Filter from "./Filter";
import JokeList from "./JokeList";

function App() {
  // const [state, funI] = useState(0);
  const [jokes, setJokes] = useState([]);

  async function fetchJokes() {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=3"
    );
    setJokes(response.data.jokes);
    console.log(response.data.jokes);
  }

  return (
    <div>
      <Header></Header>
      <Filter></Filter>
      <JokeList jokes={jokes}></JokeList>
      <button onClick={fetchJokes}>Fetch</button>
    </div>
  );
}

export default App;

//  red: E63946 phone: #F1FAEE header: #A8DADC blue: #457B9D darker: #1D3557
