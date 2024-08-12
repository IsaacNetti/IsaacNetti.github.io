import { Fragment,useState } from "react";
import Pokemon from "./Pokemon";

interface Props {
  pokemonList: any[];
  deletePokemon: (id:any) => void;
}
function ListGroup({pokemonList, deletePokemon}: Props) {

  return (
    <>
      <h1 className="text-center">Pokemon</h1>
      {pokemonList.length === 0 && <p className="text-center">No pokemon captured</p>}
      <ul className="d-flex justify-content-around flex-wrap">
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
