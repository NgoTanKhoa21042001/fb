/* eslint-disable react/prop-types */
import "./friend.scss";
// eslint-disable-next-line react/prop-types
const Friends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
