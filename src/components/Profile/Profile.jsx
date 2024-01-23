import React from "react";
import Profilepic from "../../images/Profile.png";
import ProfileObj from "../DataObj/ProfileObj";
import './Profile.css';

function Profile(){
  return (
    <div className="outer-container">
      <h1>My Profile</h1>
    <div className="profile-container">
      <div className="profile-image-container">
        <div className="profile-image">
          <img src={Profilepic} alt="profile-pic"></img>
        </div>
        <button className="profile-edit-button">Edit Profile</button>
      </div>
      <div className="profile-detail-container">
        <div className="profile-fullName">
          <h3>Full Name</h3>
          <p>{ProfileObj.fullName}</p>
        </div>
        <div className="profile-email">
          <h3>Email</h3>
          <p>{ProfileObj.email}</p>
        </div>
        <div className="profile-joining-date">
          <h3>Joined On</h3>
          <p>{ProfileObj.joinedOn}</p>
        </div>
        <div className="profile-buttons">
          <button className="profile-button-myorders">My Orders</button>
          <button className="profile-button-changePassword">Change Password</button>
          <button className="profile-button-signout">Sign Out</button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Profile;