import React from "react";
import Box from "@mui/material/Box";
import WhatsappIcon from '@mui/icons-material/WhatsApp';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Styles from './style.module.scss'

const aboutUsPaths = [
    { label: 'Careers', link: '/careers' },
    { label: 'Careers', link: '/careers' },
    { label: 'Careers', link: '/careers' },
    { label: 'Careers', link: '/careers' },
    { label: 'Careers', link: '/careers' }
]

const customerCarePaths = [
    { label: 'Track', link: '/track' },
    { label: 'Track', link: '/track' },
    { label: 'Track', link: '/track' },
    { label: 'Track', link: '/track' },
    { label: 'Track', link: '/track' }
]

// eslint-disable-next-line
const Footer = () => {
    return (
        <Box
            className={Styles.outer_container}
        >
            <Box className={Styles.inner_container}>
                <Box className={Styles.inner_container_column} width ={4/12}>
                    <img src='https://www.makeuseof.com/public/build/images/muo-logo-full-colored-light.svg' alt='logo' />
                    <br />
                    <Typography variant='p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus.
                        Erat et lectus vel ut sollicitudin elit at amet.
                    </Typography>
                </Box>
                <Box className={Styles.inner_container_column} width ={2/12}>
                    <Typography variant='h6'>
                        About Us
                    </Typography>
                    {aboutUsPaths.map((d) => (
                        <Typography variant='p'>
                            <Link to={d.link}>
                                {d.label}
                            </Link>
                            <br />
                        </Typography>
                    ))}
                </Box>
                <Box className={Styles.inner_container_column} width ={2/12}>
                    <Typography variant='h6'>
                        Customer Care
                    </Typography>
                    {customerCarePaths.map((d) => (
                        <Typography variant='p'>
                            <Link to={d.link}>
                                {d.label}
                            </Link>
                            <br />
                        </Typography>
                    ))}
                </Box>
                <Box className={Styles.inner_container_column} width ={4/12}>
                    <Typography variant='h6'>
                        Contact Us
                    </Typography>
                    70 Washington Square South, New York, NY 10012, United States <br />
                    Email: uilib.help@gmail.com<br />
                    Phone: +1 1123 456 780
                    <Box >
                        <WhatsappIcon className={Styles.foolter_contact_us_icons} />
                        <WhatsappIcon className={Styles.foolter_contact_us_icons} />
                        <WhatsappIcon className={Styles.foolter_contact_us_icons} />
                        <WhatsappIcon className={Styles.foolter_contact_us_icons} />
                        <WhatsappIcon className={Styles.foolter_contact_us_icons} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
