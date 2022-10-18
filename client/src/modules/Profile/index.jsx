import React from "react";
import "./index.scss";

const Profile = () => {
  const backgroundImage = `url(https://picsum.photos/800)`;
  return (
    <div className="hero">
      <div className="container">
        <div className="col-md-6">
          <div className="side-image" style={{ backgroundImage }}></div>
        </div>
        <div className="col-md-6">
          <div className="h4 before">Profile</div>
          <h1>Daniel Gutiérrez Gileta</h1>
          <h2>Creator</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
