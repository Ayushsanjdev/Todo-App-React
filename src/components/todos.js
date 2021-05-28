import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';

const TodoList = ({ filterTodos,todos, setTodos }) => {

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  },[])

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
      if(doc.id === todos[0].id) {
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
      {filterTodos && filterTodos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" className={`todo-item ${todo.complete ? "completed" : ""}`} onClick={handleComplete} /> 
        <label htmlFor="todo" key={todos[0].id}>{todo.todo}</label>
        <button className="delBtn" onClick={delTodos}>❌</button>
      </div>
    ))}
    </section>
  )
}

export default TodoList;