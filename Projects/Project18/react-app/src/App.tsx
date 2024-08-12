import ListGroup from './components/ListGroup';
import Form from './components/Form';
import { Fragment, useEffect, useState } from "react";
import Pokemon from './components/Pokemon';

interface Pokemon {
   id: string;
   name: string;
}

function App (){
   const [pokemonList, setPokemonList] = useState(()=>{
      const localValue = localStorage.getItem("POKEMON")
      if (localValue == null) return[]
      return JSON.parse(localValue)
   });

   useEffect(()=>{
      localStorage.setItem("POKEMON", JSON.stringify(pokemonList))
   },[pokemonList])

  const deletePokemon=(id:any)=>{ 
      setPokemonList((currentPokemon: any[]) =>{
         return currentPokemon.filter((pokemon: { id: any; }) => pokemon.id !== id)
      })
  }
   
   const handleSubmit=(newPokemon:string) =>{
      console.log(pokemonList);
      setPokemonList((currentPokemon: any) =>{
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