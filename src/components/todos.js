import React,{ useRef } from 'react';
import { db } from '../firebaseConfig';
import firebase from 'firebase';

const TodoList = ({ todos, setTodos }) => {

  const todoRef = useRef();

  const getTodos = () => {
    db.collection("todos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setTodos(
          todoRef.add({
            inputText: todos,
            complete: false,
            createdAt: firebase.firestore.fieldvalue.serverTimestamp()
          })
        )
      });
    });
  }

  //need to work on this one...



  return (
    <div className="allTodos">
      <input type="checkbox" id="todo" />
      <label htmlFor="todo" ref={todoRef}></label>
    </div>
  )
}

export default TodoList;