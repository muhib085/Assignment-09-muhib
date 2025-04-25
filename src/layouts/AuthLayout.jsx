import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import LoginNavbar from "../components/LoginNavbar/LoginNavbar";

const AuthLayout = () => {
  return (
    <div>
      <LoginNavbar></LoginNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
