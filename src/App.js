
import './App.css';
import Tablazat from './components/Tablazat';
import Urlap from './components/Urlap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Kizöldítjük a Földet!</h1>
      </header>
      <article>
      <div id="urlap">
          <Urlap/>
        </div>
        <div id="tablazat">
          <Tablazat/>
        </div>
      </article>
    </div>
  );
}

export default App;
