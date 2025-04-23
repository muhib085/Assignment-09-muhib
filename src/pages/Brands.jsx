import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard/BrandCard";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center font-semibold text-4xl my-10">
        <span className="bg-linear-to-t from-sky-500 to-indigo-500 p-4 rounded-xl">
          You're One Step Away from Big Savings 🤑
        </span>
      </h2>
      <div className="w-10/12 mx-auto my-12 flex flex-col gap-4">
        {brands.map((brand) => (
          <BrandCard brand={brand} key={brand.id}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
