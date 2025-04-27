import { Star } from "lucide-react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard-ts";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";

const BrandDetails = () => {
  const singleData = useLoaderData();

  const { brandLogo, brandName, rating, shopLink } = singleData;

  const handleCopy = () => {
    toast.success("Coupon code copied!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto p-6">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src={brandLogo} alt={brandName} className="size-32 rounded" />
          <div>
            <h1 className="text-2xl font-bold">{brandName}</h1>
            <div className="flex items-center text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-1 text-gray-700">{rating}</span>
            </div>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {singleData.coupons.map((coupon, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 shadow-md flex flex-col justify-between bg-base-300 hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {coupon.description}
                </h2>
                <p className="text-gray-600 mb-1">
                  Condition: {coupon.condition}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Expires on: {coupon.expiryDate}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <CopyToClipboard text={coupon.couponCode} onCopy={handleCopy}>
                  <button className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                    Copy Code
                  </button>
                </CopyToClipboard>
                <button
                  className="bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
                  onClick={() => window.open(shopLink, "_blank")}
                >
                  Use Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
