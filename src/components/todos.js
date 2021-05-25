import React from 'react';

const TodoList = ({ todoInput }) => {
  return (
    <div className="allTodos">
      <input type="checkbox" id="todo" />
      <label htmlFor="todo">{todoInput}</label>
    </div>
  )
}

export default TodoList;