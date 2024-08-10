import ListGroup from './components/ListGroup';
import Form from './components/Form';
import { Fragment, useState } from "react";
import Pokemon from './components/Pokemon';

interface Pokemon {
   id: string;
   name: string;
}

function App (){
   let [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const deletePokemon=(id:any)=>{ 
      setPokemonList((currentPokemon) =>{
         return currentPokemon.filter(pokemon => pokemon.id !== id)

      })
  }
   
   const handleSubmit=(newPokemon:string) =>{
      console.log(pokemonList);
      setPokemonList((currentPokemon) =>{
         return[
            ...currentPokemon,
            {id:crypto.randomUUID(), name:newPokemon},
         ]
      })
   }
   
   return (
   <div>
      <ListGroup pokemonList={pokemonList} deletePokemon={deletePokemon}/>
      <Form onSubmit={handleSubmit}/>
   </div>
   );
}

export default App;