import { Fragment,useState } from "react";
import Pokemon from "./Pokemon";

interface Props {
  pokemonList: [];
  deletePokemon: (id:any) => void;
}
function ListGroup({pokemonList, deletePokemon}: Props) {

  return (
    <>
      <h1>Pokemon</h1>
      {pokemonList.length === 0 && <p>No pokemon captured</p>}
      <ul className="list-group">
        {pokemonList.map((pokemon) => {
          return(
          <Pokemon name={pokemon.name} id={pokemon.id} deletePokemon={deletePokemon}/>
          )
        })}
      </ul>
    </>
  );
}

export default ListGroup;
