import React from 'react';
import { db } from '../firebaseConfig';
import firebase from 'firebase/app';

const Form = ({ todos, setTodos, todoInput,  setTodoInput }) => {

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  }

  const addTodos = (e) => {
    e.preventDefault();
    if(todoInput === '') {
      alert("Please! Enter a todo first!!") 
    } else {
      db.collection('todos').add(
      {
        todoInput: todoInput,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        complete: false
      }
    )}
    setTodoInput("");
  };

  return(
    <form>
      <input className="input1"
        type="text" 
        placeholder="add details..." 
        value={todoInput} 
        onChange={handleChange} />
      <button 
        className="addButton"
        type="submit" onClick={addTodos}>Add</button>
      <br />
      <p style={{color: 'red'}}></p>
    </form>
  )
  
}

export default Form;