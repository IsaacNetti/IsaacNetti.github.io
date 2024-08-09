import ListGroup from './components/ListGroup';
import Form from './components/form';

function App (){
   let pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Mudkip"];

   return (
   <div>
      <ListGroup pokemon={pokemon}/>
      <Form pokemon={pokemon}/>
   </div>
   );
}

export default App;