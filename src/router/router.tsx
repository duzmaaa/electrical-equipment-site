import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "../componets/Layout";
import Truck from "../pages/Truck";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/kamion", element: <Truck /> },
      { path: "/proizvod/:id", element: <ProductDetail /> },
      { path: "/kontakt", element: <Contact /> },
    ],
  },
]);

export default router;
