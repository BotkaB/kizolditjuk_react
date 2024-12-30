
import './App.css';
import Tablazat from './components/Tablazat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Kizöldítjük a Földet!</h1>
      </header>
      <article>
        <div id="tablazat">
          <Tablazat/>
        </div>
      </article>
    </div>
  );
}

export default App;
