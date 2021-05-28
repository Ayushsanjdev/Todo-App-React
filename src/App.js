import './App.css';
import React, {useState} from 'react';
import TodoList from './components/todos';
import Form from './components/form';

function App() {
  
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');  

  const statusHandler = () => {
    
  }

  return (
    <div className="App">
      <h1>
        #todo
      </h1>
      <section onClick={statusHandler}>
        <div className="all">
          All
        </div>
        <div className="active">
          Active
        </div>
        <div className="completed">
          Completed
        </div>
      </section>
      <hr />
      <Form 
        setTodoInput={setTodoInput} 
        todoInput={todoInput} 
        todos={todos} 
        setTodos={setTodos} />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        status={status} 
        setStatus={setStatus}  />
    </div>
  );
}

export default App;
