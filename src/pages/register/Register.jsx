/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import defaultProfile from "../../assets/profileCover/DefaultProfile.jpg";

import "./register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const displayName = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);

  //     const storageRef = ref(storage, "usersImages/" + displayName);

  //     const uploadTask = uploadBytesResumable(storageRef, image);

  //     uploadTask.on(
  //       (error) => {
  //         setError(true);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           await updateProfile(res.user, {
  //             displayName,
  //             photoURL: downloadURL,
  //           });

  //           await setDoc(doc(db, "users", res.user.uid), {
  //             uid: res.user.uid,
  //             displayName,
  //             email,
  //             photoURL: downloadURL,
  //           });

  //           await setDoc(doc(db, "usersPosts", res.user.uid), { messages: [] });
  //           // console.log(res.user);
  //         });
  //       }
  //     );
  //   } catch (error) {
  //     setError(true);
  //   }
  // };
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">FaceBook</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <div className="top">
              <img
                src={image ? URL.createObjectURL(image) : defaultProfile}
                alt=""
                className="profileImg"
              />
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  style={{ display: "none" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="bottom">
              <form className="bottomBox" onClick={handleRegister}>
                <input
                  type="text"
                  placeholder="Username"
                  id="displayName"
                  className="registerInput"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="registerInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="registerInput"
                  required
                />
                {/* <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPasword"
                  className="registerInput"
                  required
                /> */}
                <button type="submit" className="registerButton">
                  Sign Up
                </button>
                <button className="loginRegisterButton">
                  Log into Account
                </button>
                {error && <span>Something went wrong</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
