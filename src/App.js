import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Linked List Visualizer</h1>
      <form>
        <label>
          Value:
          <input type="text" name="value" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form>
        <label>
          id:
          <input type="text" name="id" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
