import React from "react";
// import { useSelector } from "react-redux";
// import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Typography from "@mui/material/Typography";
// import CallIcon from "@mui/icons-material/Call";
// import PersonIcon from "@mui/icons-material/Person";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocationItem from "./LocationItem";
// import { locations } from "../../constants/options";

import Topbar from "../../sharedComponents/Topbar";
import Header from "../../sharedComponents/Header";
import Menu from "../../sharedComponents/Menu";
import Footer from "../../sharedComponents/Footer";

// eslint-disable-next-line
const CustomerLayout = () => {
    // console.log('customer layout')
    return (
        <>
        <Topbar />
        <Header />
        <Menu />
        <div style={{height: '200vh'}} />
        <Footer />
        </>
    )
};

export default CustomerLayout;
