import React from 'react';

const Form = ({ setTodoInput }) => {

  const handleChange = (e) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  }

  return(
    <form>
      <input className="input1"
        type="text" 
        placeholder="add details..." 
        onChange={handleChange} />
      <button 
        type="submit">Add</button>
    </form>
  )
  
}

export default Form;