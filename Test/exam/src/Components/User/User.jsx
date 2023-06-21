import React, { useEffect, useState } from "react";
import classes from "./User.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const User = () => {
  let [user, setUser] = useState(null);
  let params = useParams();
  let fetchUser = async () => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_SERVER_BASE_URL + `users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
    return () => {
      setUser(null);
    };
  }, []);
  return (
    <div className={classes.userSection}>
      {user !== null && (
        <div className={classes.card}>
          <div className={classes.image_container}>
            <img src={user.photo} alt={user.firstname} />
          </div>
          <h2>Name: {`${user.firstname} ${user.lastname}`.toUpperCase()}</h2>
          <h2>Age: {user.age}</h2>
        </div>
      )}
    </div>
  );
};

export default User;
