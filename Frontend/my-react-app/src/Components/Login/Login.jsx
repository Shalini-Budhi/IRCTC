import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    navigate("/signUp");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        {
          Email: email,
          Password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login Response:", response.data);

      alert("Login Successful ✅");

      // Example (use later if you add JWT)
      // localStorage.setItem("token", response.data.token);

      navigate("/"); // redirect after login

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <p className="forgot">FORGOT ACCOUNT DETAILS?</p>

          {/* Error message */}
          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="sign-in" disabled={loading}>
            {loading ? "Signing In..." : "SIGN IN"}
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
