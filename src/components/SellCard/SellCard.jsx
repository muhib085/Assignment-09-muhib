import React from "react";

const SellCard = ({ brand }) => {
  const { brandLogo, brandName, coupons, category } = brand;

  return (
    <div className="card bg-base-200 shadow-sm hover:scale-110 transition duration-700 ease-in-out">
      <figure className="px-10 pt-10">
        <img src={brandLogo} alt="Shoes" className="rounded-xl size-24" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{brandName}</h2>
        <p className="italic font-light text-xl">
          Total Coupons: {coupons.length}
        </p>
        <p className="font-medium">{category}</p>
      </div>
    </div>
    // <div className="">
    //   <img className="size-24" src={brandLogo} alt="" />
    //   <h4>{brandName}</h4>
    //   <p>Total Coupons: {coupons.length}</p>
    //   <p>{category}</p>
    // </div>
  );
};

export default SellCard;
