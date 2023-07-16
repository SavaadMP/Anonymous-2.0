import "./AccDetails.scss";
import { useSelector } from "react-redux";

function AccDetails() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="acc_details">
      {user && (
        <form>
          <div className="form_group">
            <label htmlFor="username">Username:</label>
            <input type="text" defaultValue={user.username} />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email:</label>
            <input type="text" defaultValue={user.email} />
          </div>
          <div className="form_group">
            <label htmlFor="usercode">usercode:</label>
            <input type="text" defaultValue={user.usercode} />
          </div>
          <div className="form_group submit_button">
            <button type="submit">Update Details</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AccDetails;
