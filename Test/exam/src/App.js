// import { useReducer } from "react";
import Navbar from "./Components/Navbar/Navbar";
import RootRouter from "./Routes/RootRouter";
import { useSelector } from "react-redux";

function App() {
  let auth = useSelector(state =>state.authReducer);
  
  return (
    <div className="App">
     {auth.isAuth && <Navbar />}
      <RootRouter />
    </div>
  );
}

export default App;
 