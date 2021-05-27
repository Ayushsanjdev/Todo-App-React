import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';

const TodoList = ({ todos, setTodos }) => {

  useEffect(() => {
    getTodos();
  })

  

  const getTodos = () => {
    db.collection("allTodos").onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          done: doc.data().done
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

  const delTodos = () => {
    db.collection("allTodos").doc(todos[0].id).delete();
  }

  return (
      todos && todos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" /> 
        <label htmlFor="todo">{todo.todo}</label>
        <button className="delBtn" onClick={delTodos}>x</button>
      </div>
    ))
  )
}

export default TodoList;