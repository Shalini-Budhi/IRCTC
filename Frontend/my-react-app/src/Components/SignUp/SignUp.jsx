import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userSignUpDetails, setUserSignUpDetails] = useState({
    userName: "",
    fullName: "",
    password: "",
    email: "",
    mobile: "",
    loading: false,
    error: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserSignUpDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUserSignUpDetails((prev) => ({
      ...prev,
      loading: true,
      error: "",
    }));

    const formData = {
      UserName: userSignUpDetails.userName,
      FullName: userSignUpDetails.fullName,
      Password: userSignUpDetails.password,
      Email: userSignUpDetails.email,
      Mobile: userSignUpDetails.mobile,
    };

    try {
      await axios.post("http://localhost:3000/api/v1/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("User Registered Successfully 🎉");
      navigate("/login");

      // Reset form
      setUserSignUpDetails({
        userName: "",
        fullName: "",
        password: "",
        email: "",
        mobile: "",
        loading: false,
        error: "",
      });
    } catch (err) {
      setUserSignUpDetails((prev) => ({
        ...prev,
        error: err.response?.data?.message || "Registration failed",
        loading: false,
      }));
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
          <p>2. ARP booking allowed only after 4 days from registration.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name *</label>
            <input
              type="text"
              name="userName"
              value={userSignUpDetails.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={userSignUpDetails.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={userSignUpDetails.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="info-strip">
            Invalid email ID may lead to deactivation.
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={userSignUpDetails.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile *</label>
            <div className="mobile-row">
              <select>
                <option>+91 - India</option>
              </select>
              <input
                type="text"
                name="mobile"
                value={userSignUpDetails.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {userSignUpDetails.error && (
            <p className="error">{userSignUpDetails.error}</p>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={userSignUpDetails.loading}
          >
            {userSignUpDetails.loading ? "Registering..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
