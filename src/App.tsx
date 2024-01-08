import "./App.css";
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { fetchUsers } from "./store/reducers/actionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  // useEffect(() => {
  //   dispatch(fetchUsers());
  //   // eslint-disable-next-line
  // }, []);
  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
