interface Props{
    id: `${string}-${string}-${string}-${string}-${string}`;
    name: string;
    deletePokemon: (id:any) => void;
}
function Pokemon({id,name,deletePokemon}:Props){

    return(
        <li className="list-group-item text-light bg-dark rounded p-3" key={id}>
            {name} <button onClick={()=>deletePokemon(id)} className="btn btn-danger">Release</button>
          </li>
    );
}

export default Pokemon;