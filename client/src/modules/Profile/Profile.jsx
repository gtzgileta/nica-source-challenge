import React from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "./index.scss";

const Profile = ({ profile, backgroundImage }) => (
    <div className="hero">
      <div className="container">
        <div className="col-md-6">
          <div className="side-image" style={{ backgroundImage }}></div>
        </div>
        <div className="col-md-6">
          <div className="h4 before">Profile</div>
          <h1>{ `${profile?.first_name} ${profile?.last_name}` || '' }</h1>
          <h2>{ profile?.role || '' }</h2>
          <Button variant="contained" endIcon={<AddIcon />}>Follow profile</Button>
        </div>
      </div>
    </div>
  );

export default Profile;
