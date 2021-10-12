import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('')
  const [id, setId] = useState('')

  const createNode = (e) => {
    e.preventDefault();
    list.push(value);
    setValue('');
    alert("CREATED NODE");
  };

  const deleteNode = (e) => {
    e.preventDefault();
    list.pop(parseInt(id));
    setId('');
    alert("DELETE NODE");
  }

  return (
    <div className="App">
      <h1>Linked List Visualizer</h1>
      <form onSubmit={createNode}>
        <label>
          Value:
          <input type="text" name="value" onChange={(e) => setValue(e.target.value)} />
        </label>
        <input type="submit" value="create node" />
      </form>

      <form onSubmit={deleteNode}>
        <label>
          id:
          <input type="text" name="id" onChange={(e) => setId(e.target.value)} />
        </label>
        <input type="submit" value="delete node" />
      </form>

      {
        list.map(item => {
            return(
              <div className="node-items-container">
                <div className="node-item">{item}</div>
                <div className="vertical-line"/>
              </div>
            );
        })
      }
    </div>
  );
}

export default App;
