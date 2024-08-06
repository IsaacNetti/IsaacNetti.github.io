import { Fragment } from "react";

function ListGroup() {
  let items = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Mudkip"];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>Pokemon</h1>
        <p>No pokemon captured</p>
      </>
    );

  return (
    <>
      <h1>Pokemon</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          New Pokemon
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Pokemon name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <button type="button" className="btn btn-primary">
        Add
      </button>
    </>
  );
}

export default ListGroup;
