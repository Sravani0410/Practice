import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AddData from "./components/crud/AddData";
import { Provider } from "react-redux";
import Store from "./components/Features/Store";
import Index from "./components/crud/Index";
import Edit from "./components/crud/Edit";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Provider store={Store} >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Index name={userName} />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
