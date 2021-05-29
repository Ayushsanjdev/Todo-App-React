import './App.css';
import React, { useState,useEffect } from 'react';
import TodoList from './components/todos';
import Form from './components/form';

function App() {
  
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);  

  const statusHandler = (e) => {
    setStatus(e.target.className);
  }

  useEffect(() => {
    filterHandler();
    //eslint-disable-next-line
  },[todos,status])

  // filtering all the todos
  const filterHandler = () => {
    switch(status) {
      case "complete":
        setFilterTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "active":
        setFilterTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  //filter is left and coloring part is left
  



  return (
    <div className="App">
      <h1>
        #todo
      </h1>
      <section>
        <button onClick={statusHandler} className="all">
          All
        </button>
        <button onClick={statusHandler} className="active">
          Active
        </button>
        <button onClick={statusHandler} className="complete">
          Complete
        </button>
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
        setStatus={setStatus}
        filterTodos={filterTodos}  />
    </div>
  );
}

export default App;
