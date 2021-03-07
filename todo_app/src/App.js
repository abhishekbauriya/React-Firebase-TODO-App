import React, { useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'You can add one by one']);
  const [input, setInput] = useState('');
  console.log('🌟', input);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();
    // this will stop the REFRESH
    console.log('🚀', 'Im working !!!');
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
    console.log(todos);
  }

  return (
    <div className="App">
      <h1>HELLO WORLD Programmers !!!</h1>
      
      <form>

        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
          </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>


    </div>
  );
}

export default App;
