import "./Auth.scss";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLogin();

  async function loginHandler(event) {
    event.preventDefault();
    await login(email, password);
  }

  return (
    <div className="auth_container">
      <div className="auth_content">
        <h3>Login to an existing account..!!</h3>
        <div className="auth_form">
          <form onSubmit={loginHandler}>
            <div className="form_group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="eg: anonymous@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password should be strong.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="info_box">
                <button className="error-btn" type="button">
                  {error}
                </button>
              </div>
            )}

            {isLoading && (
              <div className="info_box">
                <button type="button">Please Wait..</button>
              </div>
            )}

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
