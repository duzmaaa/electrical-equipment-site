import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "../componets/Layout";
import AboutUs from "../pages/AboutUs";
import TruckTuningPage from "../pages/TruckTuningPage";
import EcuModificationsPage from "../pages/EcuModification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/product/kamion", element: <Truck /> },
      // { path: "/proizvod", element: <ProductDetail /> },
      { path: "/tuning", element: <TruckTuningPage /> },
      { path: "/modifikacije", element: <EcuModificationsPage /> },
      { path: "/kontakt", element: <Contact /> },
      { path: "/onama", element: <AboutUs /> },
    ],
  },
]);

export default router;
