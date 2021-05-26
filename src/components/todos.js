import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';
import firebase from 'firebase';

const TodoList = ({ todoInput,todos, setTodos }) => {

  useEffect(() => {
    getTodos()
  },[])

  const getTodos = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todos: doc.data().todoInput,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          complete: false
        })
      ));
    })
  }

  return (
      todos && todos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" />
        <label htmlFor="todo"> {todo.todos} </label>
        <button>x</button>
      </div>
      )
      )
  )
}

export default TodoList;