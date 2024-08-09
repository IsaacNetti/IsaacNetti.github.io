import ListGroup from './components/ListGroup';
import Form from './components/form';
import { Fragment, useState } from "react";

function App (){
   let [pokemon, setPokemon] = useState(['']);
   pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Mudkip"];

   // pokemon = []

   const updatePokemon = (newPokemon:string) => {
      pokemon.push(newPokemon);
      setPokemon(pokemon);
   }
   const handleSubmit=(newPokemon:string) =>{
      updatePokemon(newPokemon);
      console.log(pokemon);
  }
   
   return (
   <div>
      <ListGroup pokemon={pokemon}/>
      <Form pokemon={pokemon} onSubmit={handleSubmit}/>
   </div>
   );
}

export default App;