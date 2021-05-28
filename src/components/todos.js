import React,{ useEffect } from 'react';
import { db } from '../firebaseConfig';

const TodoList = ({ status, setStatus, todos, setTodos }) => {

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  },[])

  

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

  const delTodos = () => {
    db.collection("allTodos").doc(todos[0].id).delete()  
  }

  return (
    <section className="todoListSection">
      {todos && todos.map((todo) => (
      <div className="allTodos">
        <input type="checkbox" id="todo" onClick={handleComplete} /> 
        <label htmlFor="todo" key={todo.uid}>{todo.todo}</label>
        <button className="delBtn" onClick={delTodos}>❌</button>
      </div>
    ))}
    </section>
  )
}

export default TodoList;