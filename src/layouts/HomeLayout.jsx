import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import TopBrands from "../components/TopBrands/TopBrands";
import BrandOnSell from "../components/BrandOnSell/BrandOnSell";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <header className="w-11/12 mx-auto">
        <section className="mt-12">
          <Banner></Banner>
        </section>
      </header>
      <main className="w-11/12 mx-auto">
        <section>
          <TopBrands></TopBrands>
        </section>
        <section className="my-12">
          <BrandOnSell></BrandOnSell>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
