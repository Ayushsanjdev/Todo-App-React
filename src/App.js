import './App.css';
import React, { useState,useEffect } from 'react';
import TodoList from './components/todos';
import Form from './components/form';

function App() {
  
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  // const [checked, setChecked] = useState(false);  

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  useEffect(() => {
    filterHandler();
    //eslint-disable-next-line
  },[ todos, status ])


  // filtering all the todos
  const filterHandler = () => {
    switch(status) {
      case "complete":
        setFilterTodos(todos.filter((todo) => todo.done === true));
        break;
      case "active":
        setFilterTodos(todos.filter((todo) => todo.done === false));
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
      <section onClick={statusHandler} >
        <button className={status === 'all' ? "all" : "all-alternative"} value="all">
          All
        </button>
        <button className={status === 'active' ? "active" : "active-alternative"} value="active">
          Active
        </button>
        <button className="complete" value="complete">
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
        todoInput={todoInput} />
    </div>
  );
}

export default App;
