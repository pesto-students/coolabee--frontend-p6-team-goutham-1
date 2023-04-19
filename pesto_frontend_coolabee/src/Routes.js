import React from "react";
import CustomerLayout from "./Layouts/Customer";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";


const Routes = [
  {
    path: "/",
    renderer: (params = {}) => <CustomerLayout {...params} />,
  },

]

export default Routes;
