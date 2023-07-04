import "./Auth.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth_container">
      <div className="auth_content">
        <h3>Create an account..!!</h3>
        <div className="auth_form">
          <form>
            <div className="form_group">
              <label htmlFor="username">Username:</label>
              <input type="text" placeholder="eg:John Doe" />
            </div>

            <div className="form_group">
              <label htmlFor="usercode">User Code:</label>
              <input type="text" placeholder="eg:JD2023" />
            </div>

            <div className="form_group">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="eg:johndoe@gmail.com" />
            </div>

            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password should be strong!!"
              />
            </div>

            <div className="form_group">
              <label htmlFor="cPassword">Confirm Password:</label>
              <input type="password" placeholder="Re-enter password here.." />
            </div>

            <div className="form_group termsAndCond">
              <input
                type="radio"
                name="termsAndConditions"
                id="termsAndConditions"
              />
              <label htmlFor="termsAndConditions">
                I completely agree to the Privacy and Policy & terms of use.
              </label>
            </div>

            <div className="form_group">
              <button className="primary-btn" type="submit">
                Create Account
              </button>
            </div>
            <div className="form_group change_auth">
              <p>
                Already have an account!? <Link to="/login">Login?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
