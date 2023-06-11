// eslint-disable-next-line no-unused-vars
import React from "react";
import "./profilerightbar.scss";
import friend1 from "../../assets/person/friend1.jpg";
import friend2 from "../../assets/person/friend2.jpg";
import friend3 from "../../assets/person/friend3.jpg";
import friend4 from "../../assets/person/friend4.jpg";
import friend5 from "../../assets/person/friend5.jpg";
import friend6 from "../../assets/person/friend6.jpg";
import { Link } from "react-router-dom";
const ProfileRightbar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <div className="profileRightBarTitle">User Infomation</div>
        <Link to="/profile/userId/edit">
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">amberlogan@gmail.com</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">+4 123 456 789</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Address: </span>
          <span className="profileRightBarInfoValue">
            Melwood Str. 72 Liverpool
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">United Kingdom</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profileRightBarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img src={friend1} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={friend2} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={friend3} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={friend4} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={friend5} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={friend6} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightbar;
