import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="m-0 p-0">
        <header className="App-header text-center">
          <h1 className="m-5">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword ="Fall" />
        </main>
        <footer className="app-footer">
          <small>
            Coded by Amanda Ventura
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
