import React from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/Facebook";
import ShoppingCartIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import Styles from './style.module.scss'
// import './style.scss'

const Topbar = () => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/auth")
    }

    return (
        <Box
            className={Styles.outer_container}
        >
            <Box className={Styles.inner_container}>
                <Box className={Styles.left_inner_container}>
                    <Typography className={Styles.hot_text_topnav}>
                        Coolabee
                    </Typography>
                    <Typography className={Styles.shipping_text_topnav}>
                        Free Express Shipping
                    </Typography>
                </Box>
                <Box className={Styles.right_inner_container}>
                <Button variant="text" className={Styles.loginbtn} onClick={handleClick}>Login</Button>
                   
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;
