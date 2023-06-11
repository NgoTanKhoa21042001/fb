/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./online.scss";
const Online = ({ onlineuser }) => {
  return (
    <div className="online">
      <div className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={onlineuser.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{onlineuser.username}</span>
      </div>
    </div>
  );
};

export default Online;
