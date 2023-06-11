import Img1 from "../../assets/person/user.jpg";
import {
  // eslint-disable-next-line no-unused-vars
  Close,
  // eslint-disable-next-line no-unused-vars
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";
import "./share.scss";
import { useState } from "react";
const Share = () => {
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);

  const removeImage = () => {
    setFile(null);
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={Img1} alt="" className="shareProfileImg" />
          <input
            type="text"
            placeholder="What's on your mind Amber ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Close className="shareCancleImg" onClick={removeImage} />
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <span className="shareOptionText">Photo/Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
