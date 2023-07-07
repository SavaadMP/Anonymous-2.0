import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.user);
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const { logout } = useLogout();

  function copyUserCode() {
    const profile_link = `http://localhost:5173/sendMessage/${user.usercode}`;
    navigator.clipboard.writeText(profile_link).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }

  function sendMessage() {
    navigate("/usercode");
  }

  async function logoutAcc() {
    logout();
  }

  return (
    <div className="profile_details">
      <h1>Welcome Back {user.username}!! 👋</h1>
      <h3>usercode: {user.usercode}</h3>

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
          <button onClick={logoutAcc}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
