import ListGroup from './components/ListGroup';
import Form from './components/Form';
import { Fragment, useState } from "react";

function App (){
   let [pokemonList, setPokemonList] = useState([]);

  const deletePokemon=(id:string)=>{
      if(pokemonList.size === 1) setPokemonList([]);
      setPokemonList((currentPokemon) =>{
         return[
            currentPokemon.filter(pokemon => pokemon.id !== id)
         ]
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