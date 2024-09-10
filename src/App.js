import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          Dictionary
        </header>
        <main>
          <Dictionary />
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
