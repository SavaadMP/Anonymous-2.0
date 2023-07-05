import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileDetails = () => {
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  function copyUserCode() {
    navigator.clipboard.writeText("JD2023").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }
  function sendMessage() {
    navigate("/usercode");
  }

  return (
    <div className="profile_details">
      <h1>Welcome Back Savaad!! 👋</h1>
      <h3>usercode: JD2023</h3>

      <p>Share your profile link ❤️ to get responses from your followers.</p>

      <div className="button_groups">
        <div>
          <button onClick={copyUserCode}>
            {isCopied ? "Copied To Clipboard!!" : "Copy My Profile"}
          </button>
          <button onClick={sendMessage}>Send Message</button>
        </div>
        <div>
          <button>Reset My Usercode</button>
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
