import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
        {/* Cover Section */}
        <div className="w-full text-center mb-10">
          <h1 className="text-white text-4xl font-bold">
            Welcome to Coupon Hub!
          </h1>
          <p className="text-white mt-2">
            Manage your coupons easily and quickly.
          </p>
        </div>

        {/* User Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm flex flex-col items-center">
          <img
            src={user?.photoURL && user.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-600 mt-1">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
