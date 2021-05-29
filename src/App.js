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
    filterHandler()
    //eslint-disable-next-line
  },[ todos, status ])


  // filtering all the todos
  const filterHandler = () => {
    switch(status) {
      case "complete":
        setFilterTodos(todos.filter((todoList) => todoList.complete === true));
        break;
      case "active":
        setFilterTodos(todos.filter((todoList) => todoList.complete === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
  
  return (
    <div className="App">
      <h1>
        #todo
      </h1>
      <section onClick={statusHandler}>
        <button className="all">
          All
        </button>
        <button className="active">
          Active
        </button>
        <button className="complete">
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
        filterTodos={filterTodos}
        todoInput={todoInput}  />
    </div>
  );
}

export default App;
