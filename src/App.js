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

  const filterHandler = () => {
    switch(status) {
      case "complete":
        setFilterTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "active":
        setFilterTodos(todos.filter((todo) => todo.active === false));
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
        <div className="all">
          All
        </div>
        <div className="active">
          Active
        </div>
        <div className="complete">
          Complete
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
