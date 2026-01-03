import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import DashBoard from "./Components/DashBoard/DashBoard";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
const App = () => {
  return (
    <>
      <BrowserRouter>
            {location.pathname === "/login" ? null : <Navbar />}
        <Routes>
          
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
