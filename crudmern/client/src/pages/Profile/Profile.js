import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import moment from "moment"
import { useParams } from "react-router-dom";

import Spiner from "../../components/Spiner/Spiner";
import { singleuserget } from "../../services/Apis";
import { BASE_URL } from "../../services/helper";
import "./Profile.css";
const Profile = () => {
  const [showSpin, setShowSpin] = useState(true);
  const [profileData,setProfileData]=useState({});
  const { id } = useParams();

  const userProfileGet = async () => {
    const response = await singleuserget(id);
    console.log("profile responce",response)
    if(response.status==200){
      setProfileData(response.data)
    }
    else{
      console.log("error")
    }
  };
  useEffect(() => {
    userProfileGet()
    setTimeout(() => {
      setShowSpin(false);
    }, [1200]);
  }, [id]);
  return (
    <>
      {showSpin ? (
        <Spiner />
      ) : (
        <div className="container">
          <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
            <Card.Body>
              <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <img src={`${BASE_URL}/uploads/${profileData.profile}`}/>
                  </div>
                </div>
              </Row>
              <div className="text-center">
                <h3>{profileData.fname}</h3>
                <h4>
                  <i className="fa-solid fa-envelope email"></i>&nbsp; :-{" "}
                  <span>{profileData.email}</span>
                </h4>
                <h5>
                  <i className="fa-solid fa-mobile"></i>&nbsp; :-{" "}
                  <span>{profileData.mobile}</span>
                </h5>
                <h4>
                  <i className="fa-solid fa-person">
                    &nbsp; :- <span>{profileData.gender}</span>
                  </i>
                </h4>
                <h4>
                  <i className="fa-solid fa-location-pin location"></i>&nbsp; :-{" "}
                  <span>{profileData.location}</span>
                </h4>
                <h4>
                  Status &nbsp; :- <span>{profileData.status}</span>{" "}
                </h4>
                <h5>
                  <i className="fa-solid fa-calendar-days calendar"></i>{" "}
                  &nbsp;Date Created &nbsp;:- <span>{moment(profileData.datecreated).format("DD-MM-YYYY")}</span>{" "}
                </h5>
                <h5>
                  <i className="fa-solid fa-calendar-days calendar"></i>{" "}
                  &nbsp;Date Updated &nbsp;:- <span>{profileData.dateupdated}</span>{" "}
                </h5>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Profile;
