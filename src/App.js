import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Linked List Visualizer</h1>
      <form>
        <label>
          Value:
          <input type="text" name="value" />
        </label>
        <input type="submit" value="Add Node" />
      </form>

      <form>
        <label>
          id:
          <input type="text" name="id" />
        </label>
        <input type="submit" value="Delete Node" />
      </form>

    </div>
  );
}

export default App;
