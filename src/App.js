import { useState, useEffect } from 'react';
import './App.css';


export function App() {

  let [todos, setTodos] = useState([])
  let [loading, setLoading] = useState(true)
  let [isError, setIsError] = useState(false)
  let [isComplete, setIsComplete] = useState(false)
  console.log(todos);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
  .then(response => response.json())
  .then(json => {
    setTodos(json.results)
    setLoading(false)
    console.log(json.results);
  })
  .catch((err) => {
    setIsError(true)
    setLoading(false)
  })
  }, [])

  return (
    <div className="App">
     {loading && <h1>Loading...</h1>}
     {isError && <h1>Error...</h1>}
     {todos.length !== 0 && (
       <ul className='d-flex flex-wrap justify-content-between'>
        <h1 className='text-success w-100'>The Rick and Morty API</h1>

        {todos.map((todo) => (
          <li className="card m-3 cards" key={todo.id}>
            <div className="wrap">
            <div className="row  g-0">
              <div className="col-md-4">
                <img src={todo.image} width="400" height="700" className='img-fluid rounded-start' alt="Template" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{todo.name}</h3>
                  <p className="card-text aliv">{todo.status} - {todo.species}</p>
                  <p className="card-text last">Last known location:</p>
                  <h4 className='card-text post'>{todo.location.name}</h4>
                  <p className="card-text first">First seen in:</p>
                  <h4 className='card-text post'>{todo?.type || "not found"}</h4>
                  
                </div>
              </div>
            </div>
           
           
           </div>
          </li>

         
        ))}
      </ul>
     )}
    </div>
  );
}

export default App;
