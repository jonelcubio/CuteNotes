import { useState } from "react";
import icon from "../assets/icon.png";
import login from "../assets/login.svg";
import LoginModal from "./LoginModal";
export default function Header() {

  const [isModalOpen, setisModelOpen] = useState<boolean>(false);
  return(
    <>
    <div className="header-con">
      <div className="header-left-con">
        <img src={icon} alt="CuteNotes" className="header-left-logo" />
        <div className="header-left-title">CuteNotes</div>
      </div>
      

      <div className="header-middle-con"></div>

      <div className="header-right-con" onClick={() => setisModelOpen(true)}>
        <img src={login} alt="login/register" className="header-right-img" />
        <p className="header-right-login">Login / Sign Up</p>
      </div>
    </div>

      <LoginModal isOpen={isModalOpen} onClose={() => setisModelOpen(false)} />
    </>
  );
}