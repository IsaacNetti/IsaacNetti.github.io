import { Fragment, useState } from "react";

function Form({pokemon}){
let [newPokemon,setNewPokemon] = useState("");

    const handleSubmit= (event) =>{
        event.preventDefault();
        pokemon.push(newPokemon);
        console.log(pokemon);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={newPokemon} 
            onChange ={(e) => setNewPokemon(e.target.value)}
            ></input>
            <button className="btn btn-primary">Add</button>
        </form>
    );
}

export default Form;