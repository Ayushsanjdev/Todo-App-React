import React, { useEffect } from 'react';
import { db } from '../firebaseConfig';

const TodoList = ({ status, filterTodos, todos, setTodos }) => {

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
      ))
    })
  }
  
  // toggling true or false on check
  const handleComplete = (todoId) => {
    db
    .collection("allTodos")
    .doc(todoId)
    .get()
    .then((item) => {
      if(item.exists) {
        return item.ref.update({done: !item.data().done })
      } else {
        console.error("error");
      }
    })
  }

  //deleting todos
  const delTodos = () => {
    db.collection("allTodos").doc(filterTodos[0].id).delete()
  }

  // const delAll = () => {
  //   db.collection("allTodos").doc(filterTodos[0].id).delete(filterTodos[0].done == true)
  // }

  return (
    <section className="todoListSection">
    <p 
      style={{textAlign:"center",color: 'red', fontWeight: 'lighter'}}>Note: Please! Do not write Explicit or abusive content or words</p>

      {filterTodos.map((todo) => (
      <div className="allList">
        <input
          type="checkbox" 
          id="todo"
          maxLength="15" 
          onChange={(e) => handleComplete(todo.id)} 
          checked={todo.done} /> 
        <label 
          htmlFor="todo" 
          className={todo.done === true ? "addCheck" : ""}>
          {todo.todo}</label>
        <div className="btn-div" >
        {status === "complete" ? 
          <button 
            className="delBtn" 
            onClick={delTodos}>❌</button>
          : ""
        }
        </div> 
      </div>
    ))}
    {/* {status === 'complete' ?
    <div style={{textAlign: 'center', marginTop: '1rem'}}> 
    <button style={{padding: '0.8rem', borderRadius: '10px', backgroundColor: '#ff6600', color: 'white', cursor: 'pointer', border: '2px outset transparent', fontSize: "1rem"}} onClick={delAll} >Delete all</button>
    </div>
    : ""} */}
    </section>
  )
}

export default TodoList;