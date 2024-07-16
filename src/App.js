import './App.css';
import SearchWeather from "./SearchWeather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchWeather />
      </header>
      <footer><a href="https://github.com/lggomez18/weather-react">Open-sourced</a>on Github 💻 <br />
      Hosted on <a href="https://weather-react-page.netlify.app/">Netlify ❇️</a></footer>
    </div>
  );
}

export default App;
