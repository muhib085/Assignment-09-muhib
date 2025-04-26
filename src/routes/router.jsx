import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Brands from "../pages/Brands";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import BrandDetails from "../pages/BrandDetails";
import dataLoad from "../utilities/loaderFunc";
import PrivateRoute from "./PrivateRoute";

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
    path: "/brand/:id",
    element: (
      <PrivateRoute>
        <BrandDetails></BrandDetails>
      </PrivateRoute>
    ),
    loader: dataLoad,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>Error</h2>,
  },
]);

export default router;
