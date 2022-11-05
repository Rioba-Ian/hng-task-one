import React from "react";
import myprofile from "../assets/sqaured_profile.jpg"

const Profile = () => {
  return (
    <div className="main__content">
      <img src={myprofile} id="profile__img" className="profile" alt="Ian Rioba" />
      <h1 id="twitter">IanRioba</h1>
      <h1 id="slack" className="hidden">IanRioba</h1>
    </div>
  );
};

export default Profile;
