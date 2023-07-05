import "./AccDetails.scss";

function AccDetails() {
  return (
    <div className="acc_details">
      <form>
        <div className="form_group">
          <label htmlFor="username">Username:</label>
          <input type="text" defaultValue="Savaad" />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email:</label>
          <input type="text" defaultValue="johndoe@gmail.com" />
        </div>
        <div className="form_group">
          <label htmlFor="usercode">usercode:</label>
          <input type="text" defaultValue="JD2023" />
        </div>
        <div className="form_group submit_button">
          <button type="submit">Update Details</button>
        </div>
      </form>
    </div>
  );
}

export default AccDetails;
