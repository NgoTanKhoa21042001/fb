// eslint-disable-next-line no-unused-vars
import React from "react";
import birtday from "../../assets/birthdaygifts/gift.png";
import adv from "../../assets/ads/adv.jpg";
import "./rightbarhome.scss";
import { Usersonline } from "../../data";
import Online from "../online/Online";
const RightbarHome = () => {
  return (
    <div className="RightbarHome">
      <div className="birthdayContainer">
        <img src={birtday} alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Sarah Dane</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      <img src={adv} alt="" className="rightbarAdvert" />
      <span className="rightbarTitle">Online Friends</span>
      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};

export default RightbarHome;
