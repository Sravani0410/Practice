import { useEffect, useState } from "react";
import firestore from "./firebaseConfig";
import "./UserData.css";

function UserData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const snapshot = await firestore.collection("users").get();
        const data = snapshot.docs.map((doc) => doc.data());
        setUserData(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-data-container">
      {console.log("hgsdh", userData)}
      {userData.map((user, index) => (
        <div key={index} className="user-data-card">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <img src={user.image} alt="User" />
        </div>
      ))}
    </div>
  );
}

export default UserData;
