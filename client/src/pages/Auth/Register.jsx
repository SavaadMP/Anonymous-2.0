import "./Auth.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

function Register() {
  const [username, setUsername] = useState("");
  const [usercode, setUsercode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, error, isLoading } = useSignup();

  async function registerHandle(event) {
    event.preventDefault();
    await register(username, usercode, email, password, confirmPassword);
  }

  return (
    <div className="auth_container">
      <div className="auth_content">
        <h3>Create an account..!!</h3>
        <div className="auth_form">
          <form onSubmit={registerHandle}>
            <div className="form_group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                placeholder="eg:John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form_group">
              <label htmlFor="usercode">User Code:</label>
              <input
                type="text"
                placeholder="eg:JD2023"
                value={usercode}
                onChange={(e) => setUsercode(e.target.value)}
              />
            </div>

            <div className="form_group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="eg:johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password should be strong!!"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form_group">
              <label htmlFor="cPassword">Confirm Password:</label>
              <input
                type="password"
                placeholder="Re-enter password here.."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {isLoading ||
              (error && (
                <div className="info_box">
                  {error ? (
                    <button className="error-btn" type="button">
                      {error}
                    </button>
                  ) : (
                    <button type="button">Please Wait..</button>
                  )}
                </div>
              ))}

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
