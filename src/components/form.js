import React, { useRef } from 'react';
import { db } from '../firebaseConfig';
import firebase from 'firebase/app';

const Form = ({ todoInput,  setTodoInput }) => {

  const inputRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  }

  // adding todos
  const addTodos = (e) => {
    e.preventDefault();
    if(todoInput === '') {
      // inputRef.current.textContent = "Please enter todo first!"
      alert("please! enter a todo first!");
    } else {
      db.collection('allTodos').add({
        todo: todoInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        done: false
      })
    }
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
      {/* <p ref={inputRef}>{setTimeout(2000)}</p> */}
    </form>
  ) 
}

export default Form;