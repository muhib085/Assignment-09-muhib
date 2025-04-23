import React, { useEffect, useState } from "react";
import SellCard from "../SellCard/SellCard";
// import sellBg from "../../assets/sellBG.png";
// import sellBg2 from "../../assets/selBG2.png";
import sellBg3 from "../../assets/sellBG3.png";

const BrandOnSell = () => {
  const [brands, setBrands] = useState([]);
  //   console.log(brands);

  useEffect(() => {
    fetch("/couponData.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div
      className="py-8 rounded-2xl"
      style={{ backgroundImage: `url(${sellBg3})` }}
    >
      <h2 className="text-4xl font-bold uppercase italic text-orange-500 text-center">
        Brands On Sell!
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:w-5xl mx-auto mt-12">
        {brands.map(
          (brand) =>
            brand.isSaleOn && <SellCard key={brand.id} brand={brand}></SellCard>
        )}
      </div>
    </div>
  );
};

export default BrandOnSell;
