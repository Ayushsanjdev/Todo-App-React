import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';
import firebase from 'firebase/app';

const TodoList = ({ todos, setTodos }) => {

  useEffect(() => {
    getTodos();
  })

  

  const getTodos = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todoInput: doc.data().todoInput,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          complete: doc.data().complete
        })
      ));
    })
  }
  
  // const toggleComplete = () => {
  //   db.collection("todos").doc().update({
  //     complete: true
  //   })
  // }

  const delTodos = () => {
      db.collection("todos").doc().delete();
  }

  return (
      todos && todos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" /> 
        <label htmlFor="todo">{todo.todoInput}</label>
        <button className="delBtn" onClick={delTodos}>x</button>
      </div>
      ))
  )
}

export default TodoList;