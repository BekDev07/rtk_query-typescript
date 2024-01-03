import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { increment } from "./store/reducers/UserSlice";

function App() {
  const { count } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    console.log("salom");

    dispatch(increment(0));
  };
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={handleIncrement} type="button">
        inc
      </button>
    </div>
  );
}

export default App;
