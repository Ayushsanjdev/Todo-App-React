import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        #todo
      </h1>
      <section>
        <div>
          All
        </div>
        <div>
          Active
        </div>
        <div>
          Completed
        </div>
      </section>
      <input placeholder="add details" />
      <button>Add</button>
    </div>
  );
}

export default App;
