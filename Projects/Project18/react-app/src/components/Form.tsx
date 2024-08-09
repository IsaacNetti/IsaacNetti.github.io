import { Dispatch, FormEvent, SetStateAction } from "react";
import { Fragment, useState } from "react";

interface Props {
    pokemon: string[];
    updatePokemon: (newPokemon:string) => void;
    onSubmit: (newPokemon:String) => void;
}
function Form({pokemon, onSubmit}: Props){
let [newPokemon,setNewPokemon] = useState("");


    return(
        <form >
            <input 
            type="text" 
            value={newPokemon} 
            onChange ={(e) => setNewPokemon(e.target.value)}
            ></input>
            <button onClick={onSubmit(newPokemon)} className="btn btn-primary">Add</button>
        </form>
    );
}

export default Form;