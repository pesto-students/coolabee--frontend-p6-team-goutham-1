import React from "react";
import CustomerLayout from "./Layouts/Customer";
import LandingLayout from "./Layouts/Landing"
import AuthLayout from "./Layouts/Auth"
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";


const Routes = [
  {
    path: "/customer",
    renderer: (params = {}) => <CustomerLayout {...params} />,
  },
  {
    path: "/",
    renderer: (params = {}) => <LandingLayout {...params} />,
  },
  {
    path: "/auth",
    renderer: (params = {}) => <AuthLayout {...params} />,
  },

]

export default Routes;
