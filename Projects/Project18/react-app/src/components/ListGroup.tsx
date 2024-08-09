import { Fragment,useState } from "react";

interface Props {
  pokemon: string[];
}
function ListGroup({pokemon}: Props) {

  return (
    <>
      <h1>Pokemon</h1>
      {pokemon.length === 0 && <p>No pokemon captured</p>}
      <ul className="list-group">
        {pokemon.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
