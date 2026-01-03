import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = {
      UserName: userName,
      FullName: fullName,
      Password: password,
      Email: email,
      Mobile: mobile,
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      alert("User Registered Successfully 🎉");
      navigate('/login')

      // Clear form
      setUserName("");
      setFullName("");
      setPassword("");
      setEmail("");
      setMobile("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create Your IRCTC Account</h2>
          <span className="signin-link">SIGN IN</span>
        </div>

        <div className="info-box">
          <p>1. Garbage / Junk values in profile may lead to deactivation.</p>
          <p>
            2. ARP booking allowed only after 4 days from registration.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* User Name */}
          <div className="form-group">
            <label>User Name *</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="info-strip">
            Invalid email ID may lead to deactivation.
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile *</label>
            <div className="mobile-row">
              <select>
                <option>+91 - India</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Registering..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
