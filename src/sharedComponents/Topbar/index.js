import React from "react";
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/Facebook";
import ShoppingCartIcon from '@mui/icons-material/Instagram';
import Styles from './style.module.scss'
// import './style.scss'

const Topbar = () => {
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
                    <Box marginRight={{ xs: 1, sm: 2 }}>
                        <Link to="/cart" >
                            <Box >
                                <CallIcon className={Styles.topnav_icon} />
                            </Box>
                        </Link>
                    </Box>
                    <Box marginRight={{ xs: 1, sm: 2 }}>
                        <Link to="/cart" >
                            <Box >
                                <WhatsAppIcon className={Styles.topnav_icon} />
                            </Box>
                        </Link>
                    </Box>
                    <Box >
                        <Link to="/cart" >
                            <Box >
                                <ShoppingCartIcon className={Styles.topnav_icon} />
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;
