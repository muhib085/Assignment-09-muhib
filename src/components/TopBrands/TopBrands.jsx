import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    fetch("/couponData.json")
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, []);

  return (
    <div className="text-center mt-7 ">
      <h2 className="text-3xl font-bold my-12">Our Trusted Brand</h2>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-2">
          {allBrands.map((singleBrand) => (
            <Link key={singleBrand.id} to={singleBrand.shopLink}>
              <img
                className="size-40 lg:w-36"
                src={singleBrand.brandLogo}
                alt=""
              />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrands;
