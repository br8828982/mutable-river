import "./App.css";
import CounterApp from "./components/CounterApp";
import { CounterProvider } from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <CounterApp />
      </CounterProvider>
    </div>
  );
}

export default App;
