import Img1 from "../../assets/person/user.jpg";
import Upload from "../../assets/person/upload.png";
import "./stories.scss";
import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src={Img1} className="storyProfile" />
        <img src={Img1} alt="" className="storybackground" />
        <img src={Upload} alt="" className="storyadd" />
        <span className="text">Amber</span>
      </div>

      {Users.map((u) => (
        <Storycard user={u} key={u.id} />
      ))}
    </div>
  );
};

export default Stories;
