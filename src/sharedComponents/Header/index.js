import React from "react";
import Box from "@mui/material/Box";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom'
import Styles from './style.module.scss'

// eslint-disable-next-line
const Menu = () => {
    return (
        <Box
            className={Styles.outer_container}
        >
            <Box className={Styles.inner_container}>
                <Box className={Styles.left_inner_container}>
                    <img src='https://www.makeuseof.com/public/build/images/muo-logo-full-colored-light.svg' alt='logo' />
                </Box>
                <Box className={Styles.middle_inner_container}>
                    <FormControl fullWidth sx={{ m: 1 }} >
                        <OutlinedInput
                            className={Styles.search_bar_header}
                            id="outlined-adornment-amount"
                            endAdornment={
                                <button 
                                onClick={() => console.log('htc')} 
                                type="button"
                                >
                                    Search
                                </button>
                            }
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            placeholder="Search"
                        />
                    </FormControl>
                </Box>
                <Box className={Styles.right_inner_container}>
                    <Box marginRight={{ xs: 1, sm: 2 }}>
                        <Link to="/cart" >
                            <Box >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingBagIcon className={Styles.header_icon} />
                                </Badge>
                            </Box>
                        </Link>
                    </Box>
                    <Box >
                        <Link to="/cart" >
                            <Box >
                                <PermIdentityIcon className={Styles.header_icon} />
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Menu;
