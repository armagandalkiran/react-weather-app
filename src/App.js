import {WeatherProvider} from "./context/WeatherContext";
import Weather from "./components/Weather";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <WeatherProvider>
      <Header/>
      <Weather/>
    </WeatherProvider>
  );
}

export default App;

