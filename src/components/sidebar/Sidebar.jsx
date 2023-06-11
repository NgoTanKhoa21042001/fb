/* eslint-disable no-unused-vars */
import Menulink from "../menuLink/Menulink";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import Friends from "../friends/Friends";
import { Users } from "../../data";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Menulink Icon={<RssFeedOutlinedIcon />} text="Feeds" />
        <Menulink Icon={<ChatOutlinedIcon />} text="Chats" />
        <Menulink Icon={<GroupOutlinedIcon />} text="Friends" />
        <Menulink Icon={<BookmarkOutlinedIcon />} text="Bookmarks" />
        <Menulink Icon={<ShoppingCartOutlinedIcon />} text="Marketplace" />
        <Menulink Icon={<EventOutlinedIcon />} text="Events" />
        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          <Menulink Icon={<DarkModeOutlinedIcon />} text="Theme" />
        </span>
        <Link to="/register">
          <Menulink Icon={<LogoutOutlinedIcon />} text="Logout" />
        </Link>
        <button className="sidebarButton">Show More</button>

        <hr className="sidebarHr" />

        {/* Friends */}
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
