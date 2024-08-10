import { Dispatch, FormEvent, SetStateAction } from "react";
import { Fragment, useState } from "react";

interface Props {
    onSubmit: (newPokemon:string) => void;
}
function Form({onSubmit}: Props){
let [newPokemon,setNewPokemon] = useState("");

function handleSubmit(e:FormEvent){
    e.preventDefault()
    if(newPokemon === ""){
        alert("Enter Pokemon name");
        return;
    }
    onSubmit(newPokemon)
    setNewPokemon("")
}

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input 
            type="text" 
            value={newPokemon} 
            onChange ={(e) => setNewPokemon(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}

export default Form;