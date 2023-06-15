// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileRightbar from "../ProfileRightbar/ProfileRightBar";
import RightbarHome from "../rightbarHome/RightbarHome";

import "./rightbar.scss";
// eslint-disable-next-line react/prop-types
const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <RightbarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
