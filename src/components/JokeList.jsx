import React from "react";

export default function JokeList({ jokes }) {
  return jokes.map((joke) => {
    return (
      <div className="container">
        <div
          style={{ border: "3px #000 solid", margin: "10px auto" }}
          key={joke.id}
        >
          <hr />
          <p>{joke.setup}</p>
          <br />
          <p>{joke.delivery}</p>
        </div>
      </div>
    );
  });
}
