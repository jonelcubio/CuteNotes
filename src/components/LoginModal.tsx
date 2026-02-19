import { supabase } from "../supabaseClient";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({isOpen, onClose}: LoginModalProps) {
    if (!isOpen) return null;
    const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // Ito ang babalikan ng browser pagkatapos mag-login
        redirectTo: window.location.origin, 
      }
    });

    if (error) {
      console.error("Error logging in:", error.message);
    }
  };
  return(
    <>
     <div className="loginModal-con-main" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Sign in to CuteNotes</div>
        <div className="input-con" onClick={handleGoogleLogin}>
          <div className="input-icons">
            <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
            alt="Google logo"  className="input-img"/>
            <div className="input-text">Sign in with Google</div>
          </div>

        </div>
      
        <div className="modal-footer-text">By continuing, you agree to our Terms of Service.</div>
       
        <button className="close-btn" onClick={onClose}>Close</button>
        </div>
     </div>
    </>
  );
}