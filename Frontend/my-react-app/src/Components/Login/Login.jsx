import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    error: "",
  });

  const handleRegister = () => {
    navigate("/signUp");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoginDetails((prev) => ({
      ...prev,
      loading: true,
      error: "",
    }));

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        {
          Email: loginDetails.email,
          Password: loginDetails.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Login Successful ✅");
      navigate("/");
    } catch (err) {
      setLoginDetails((prev) => ({
        ...prev,
        error: err.response?.data?.message || "Login failed",
        loading: false,
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>LOGIN</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={loginDetails.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group password-group">
            <label>Password</label>
            <input
              type={loginDetails.showPassword ? "text" : "password"}
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
              required
            />
            <span
              className="eye"
              onClick={() =>
                setLoginDetails((prev) => ({
                  ...prev,
                  showPassword: !prev.showPassword,
                }))
              }
            >
              👁
            </span>
          </div>

          <p className="forgot">FORGOT ACCOUNT DETAILS?</p>

          {loginDetails.error && (
            <p className="error-text">{loginDetails.error}</p>
          )}

          <button
            type="submit"
            className="sign-in"
            disabled={loginDetails.loading}
          >
            {loginDetails.loading ? "Signing In..." : "SIGN IN"}
          </button>
        </form>

        <div className="bottom-buttons">
          <button className="register" onClick={handleRegister}>
            REGISTER
          </button>
          <button className="agent">AGENT LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
