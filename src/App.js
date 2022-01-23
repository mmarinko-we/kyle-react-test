import './App.css';
import OpenCloseLogic from './OpenCloseLogic';

function App() {
  OpenCloseLogic()

  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          <button
            className="App-link"
            target="_blank"
          >Buy Item
          </button>
          <button
            className="App-link"
            target="_blank"
          >Call For Information</button>
        </div>
      </header>
    </div>
  );
}

export default App;
