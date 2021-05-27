import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';
import firebase from 'firebase/app';

const TodoList = ({ todoInput,todos, setTodos }) => {

  useEffect(() => {
    getTodos();
  },[])

  

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
  
  // const handleComplete = () => {
  //     db.collection("todos").doc().update(
  //       setTodos(
  //         todos.map((item) => {
  //           if(item.id === todos.id) {
  //             return {

  //             }
  //           }
  //         })
  //       )
  //     )
  // }

  const delTodos = (id) => {
      db.collection("todos").doc(id).delete();
  }

  return (
      todos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" /> 
        <label htmlFor="todo">{todo.todoInput}</label>
        <button className="delBtn" onClick={delTodos}>x</button>
      </div>
    ))
  )
}

export default TodoList;