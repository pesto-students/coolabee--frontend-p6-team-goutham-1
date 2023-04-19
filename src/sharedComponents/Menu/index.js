import * as React from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ButtonGroup from '@mui/material/ButtonGroup';
// import { Link } from 'react-router-dom'
// import Typography from "@mui/material/Typography";
import Styles from './style.module.scss';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            className={Styles.outer_container}
        >
            <Box className={Styles.inner_container}>
                <Box className={Styles.left_inner_container}>
                    <div>
                        <Button
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            startIcon={<KeyboardArrowDownIcon />}
                        >
                            Options
                        </Button>
                        <Menu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon />
                                Edit
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon />
                                Duplicate
                            </MenuItem>
                            <Divider sx={{ my: 0.5 }} />
                            <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon />
                                Archive
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon />
                                More
                            </MenuItem>
                        </Menu>
                    </div>
                </Box>
                <Box className={Styles.right_inner_container}>
                    <div>

                        <ButtonGroup size="small" aria-label="small button group">
                            Button 1
                        </ButtonGroup>
                        <ButtonGroup color="secondary" aria-label="medium secondary button group">
                            Button 2
                        </ButtonGroup>
                        <ButtonGroup size="large" aria-label="large button group">
                            Button 3
                        </ButtonGroup>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
