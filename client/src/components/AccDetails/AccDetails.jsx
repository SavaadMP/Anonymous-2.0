import "./AccDetails.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

function AccDetails() {
  const { user } = useSelector((state) => state.user);
  const { error, isLoading, updateProfile } = useUpdateProfile();

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [usercode, setUsercode] = useState(user.usercode);

  async function updateUserDetails(e) {
    e.preventDefault();
    var data = await updateProfile(username, email, usercode);
  }

  return (
    <div className="acc_details">
      {user && (
        <form onSubmit={updateUserDetails}>
          <div className="form_group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="usercode">usercode:</label>
            <input
              type="text"
              value={usercode}
              onChange={(e) => setUsercode(e.target.value)}
            />
          </div>
          {error && (
            <div className="info_box error-btn">
              <button disabled className="error-btn" type="input">
                {error}
              </button>
            </div>
          )}
          <div
            className="form_group submit_button"
            style={{
              marginTop: "0",
            }}
          >
            <button type="submit">Update Details</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AccDetails;
