import React from 'react';

const Form = ({ todos, setTodos, todoInput,  setTodoInput }) => {

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {
        textInput: todoInput, completed: false, id: ""
      }
    ]);
    setTodoInput("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input className="input1"
        type="text" 
        placeholder="add details..." 
        onChange={handleChange}
         />
      <button 
        type="submit" onClick={handleSubmit}>Add</button>
    </form>
  )
  
}

export default Form;