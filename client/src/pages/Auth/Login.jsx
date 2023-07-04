import "./Auth.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth_container">
      <div className="auth_content">
        <h3>Login to an existing account..!!</h3>
        <div className="auth_form">
          <form>
            <div className="form_group">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="eg: anonymous@gmail.com" />
            </div>

            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password should be strong.."
              />
            </div>

            <div className="form_group">
              <button className="primary-btn" type="submit">
                Create Account
              </button>
            </div>
            <div className="form_group change_auth">
              <p>
                Don't have an account yet!?{" "}
                <Link to="/register">Register?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
