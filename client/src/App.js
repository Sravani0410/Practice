import logo from "./logo.svg";
import "./App.css";
import Auth from "./Components/Auth";
import Form from "./Components/Form";
import UserData from "./Components/UserData";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/add" element={<Form />} />
          </Routes>
        </Router>
        {/* Render the authentication component */}
        {/* <Auth/> */}

        {/* Render the form component */}
        {/* <Form /> */}

        {/* Render the component to display the data from Firestore */}
        {/* <UserData /> */}
      </div>
    </div>
  );
}

export default App;
