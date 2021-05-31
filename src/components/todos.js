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
    .then((item) => {
      if(item.exists) {
        return item.ref.update({...todos, done: !item.data().done })
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
      <div className="allList">
        <input type="checkbox" id="todo" className={todo.done === true ? "addCheck" : ""} onClick={handleComplete} defaultChecked={todo.done === true ? "Checked" : ""} /> 
        <label htmlFor="todo" className={todo.done === true ? "addCheck" : ""}>{todo.todo}</label>
        <div className="btn-div">
          <button className="delBtn" onClick={delTodos}>❌</button>
        </div>
      </div>
    ))}
    </section>
  )
}

export default TodoList;