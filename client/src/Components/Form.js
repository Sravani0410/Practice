import { useState } from "react";
import firestore from "./firebaseConfig";
import "./Form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the form data to Firestore
      await firestore.collection("users").add({
        email,
        password,
        image,
        firstName,
        lastName,
      });
      alert("successfully added");
      // Handle successful form submission
    } catch (error) {
      // Handle form submission error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="form-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="form-input"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="form-input"
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="form-input"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="form-input"
      />
      <button type="submit" className="form-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
