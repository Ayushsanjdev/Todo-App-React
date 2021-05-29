import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';

const TodoList = ({ todoInput,filterTodos, todos, setTodos }) => {

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  },[todoInput])

  //getting todos from firebase..
  const getTodos = () => {
    db.collection("allTodos").orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          done: doc.data().done 
        })
      ));
    })
  }
  
  // toggling true or false on check
  const handleComplete = () => {
    db.collection("allTodos").doc(todos[0].id).get()
    .then((doc) => {
      if(doc.exists) {
        return doc.ref.update({done: !doc.data().done })
      } else {
        console.error("error");
      }
    })
  }

  //deleting todos
  const delTodos = () => {
    db.collection("allTodos").doc(todos[0].id).delete()  
  }

  return (
    <section className="todoListSection">
      {filterTodos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" onClick={handleComplete} /> 
        <label htmlFor="todo">{todo.todo}</label>
        <div className="btn-div">
          <button className="delBtn" onClick={delTodos}>❌</button>
        </div>
      </div>
    ))}
    </section>
  )
}

export default TodoList;