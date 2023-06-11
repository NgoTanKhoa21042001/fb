// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import background from "../../assets/profileCover/profilecover.jpg";
import user from "../../assets/person/user.jpg";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.scss";
import { Helmet } from "react-helmet";
const Profile = () => {
  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={background} alt="" className="profileCoverImg" />
              <img src={user} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Amber Logan</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
