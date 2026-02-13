import { useState } from "react";
import lock from "../assets/lock.svg";
import Notes from "./Notes";
import LoginModal from "./LoginModal";
export default function Hero(){

  const [isModalOpen, setisModelOpen] = useState<boolean>(false);
  return(
    <>
    <div className="hero-main-con">
      <div className="hero-main">
        <div className="hero-landing">Capture Your<span className="hero-landing-span"> Happy </span>Thoughs</div>
        <div className="header-left-text">A cozy corner of the internet for your daily musings,<br className="header-left-br"/>big ideas, and little reminders.</div>   
    </div>
     
     <div className="header-btn-btn">
        <div className="header-btn-con">
          <img src={lock} alt="Login to Post a Note" className="header-btn-img" />
          <div className="header-btn-text" onClick={() => setisModelOpen(true)}>Login to Post a Note</div>
        </div>
     </div>

      <LoginModal isOpen={isModalOpen} onClose={() => setisModelOpen(false)} />
    
      <Notes />
     

    </div>
    </>

  );
}