import "./MsgSuccess.scss";
import { Link } from "react-router-dom";

const MsgSuccess = () => {
  return (
    <div className="succes_container">
      <div className="content">
        <div className="info_box">
          <h1>Message Sent Successfully.!! ✨</h1>
        </div>
        <div className="guide">
          <p className="alert_msg">Now.. It's your turn!! 👇</p>

          <div className="guide_box">
            <div className="msg">
              <i className="bx bxs-star"></i>
              <p>Register your Account</p>
            </div>
            <div className="msg">
              <i className="bx bxs-star"></i>
              <p>Share your profile link with others</p>
            </div>
            <div className="msg">
              <i className="bx bxs-star"></i>
              <p>
                Recieve anonymous compliments and secret messages from your
                friends and followers
              </p>
            </div>
          </div>
        </div>
        <div className="register_btn">
          <Link className="primary-btn" to="/register">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MsgSuccess;
