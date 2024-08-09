import { Fragment } from "react";

function ListGroup({pokemon}) {
  if (pokemon.length === 0)
    return (
      <>
        <h1>Pokemon</h1>
        <p>No pokemon captured</p>
      </>
    );

  return (
    <>
      <h1>Pokemon</h1>
      <ul className="list-group">
        {pokemon.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
