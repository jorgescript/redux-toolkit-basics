import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByX,
} from "./store/slices/counter/counterSlice";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <h3>Count is {counter}</h3>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByX(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  );
}

export default App;
