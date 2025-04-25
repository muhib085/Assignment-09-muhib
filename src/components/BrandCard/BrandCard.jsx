import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { AuthContext } from "../../providers/AuthProvider";

const BrandCard = ({ brand }) => {
  const contextData = useContext(AuthContext);
  console.log(contextData);

  const { brandLogo, brandName, rating, description, isSaleOn } = brand;

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between  items-center p-3 rounded-xl border-2 border-base-200 shadow-xl">
        <div className="p-3">
          <img className="size-20" src={brandLogo} alt="" />
          <h2 className="font-bold text-xl">{brandName}</h2>
          <p className="text-amber-700 font-bold">Rating: {rating}</p>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="font-bold text-xl">{brandName}</h2>
          <p>{description}</p>
        </div>
        <div className="flex flex-col justify-start">
          <button className="btn">View Coupons</button>
          <div>
            {isSaleOn && (
              <motion.h1
                className="text-2xl font-bold text-red-600 text-center mt-10"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🔥 Sale is On 🔥
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
