import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Brands from "../pages/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/brands",
    element: <Brands></Brands>,
    loader: () => fetch("/couponData.json"),
  },
  {
    path: "*",
    element: <h2>Error</h2>,
  },
]);

export default router;
