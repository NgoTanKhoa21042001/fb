import "./App.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import EditProfile from "./pages/editProfile/EditProfile";
import Home from "./pages/Home/home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  // eslint-disable-next-line no-unused-vars
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route index element={<Home />} />
              <Route path="profile">
                <Route path=":userId" element={<Profile />} />
                <Route path=":userId/edit" element={<EditProfile />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
