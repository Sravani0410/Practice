import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="container">
        <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center">
                  <img src="/man.jpg" />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Sandhya</h3>
              <h4>
                <i class="fa-solid fa-envelope email"></i>&nbsp; :-{" "}
                <span>sandhya@gmail.com</span>
              </h4>
              <h5>
                <i class="fa-solid fa-mobile"></i>&nbsp; :-{" "}
                <span>9876543210</span>
              </h5>
              <h4>
                <i class="fa-solid fa-person">
                  &nbsp; :- <span>Male</span>
                </i>
              </h4>
              <h4>
                <i class="fa-solid fa-location-pin location"></i>&nbsp; :-{" "}
                <span>Jaipur</span>
              </h4>
              <h4>
                Status &nbsp; :- <span>Active</span>{" "}
              </h4>
              <h5>
                <i class="fa-solid fa-calendar-days calendar"></i> &nbsp;:-{" "}
                <span>Active</span>{" "}
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days calendar"></i> &nbsp;:-{" "}
                <span>Active</span>{" "}
              </h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
