import { useState } from "react";
import auth from "./firebaseConfig";
import "./Auth.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Handle successful logout
    } catch (error) {
      // Handle logout error
    }
  };

  return (
    <div className="auth-container">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="auth-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="auth-input"
      />
      <button onClick={handleLogin} className="auth-button">
        Login
      </button>
      <button onClick={handleLogout} className="auth-button">
        Logout
      </button>
    </div>
  );
}

export default Auth;
