/* eslint-disable react/prop-types */
import "./storycard.scss";
// eslint-disable-next-line react/prop-types
const Storycard = ({ user }) => {
  return (
    <div className="storyCard">
      <div className="overlay"></div>
      <img src={user.profilePicture} alt="" className="storyProfile" />
      <img src={user.profilePicture} alt="" className="storybackground" />
      <span className="text">{user.username}</span>
    </div>
  );
};

export default Storycard;
