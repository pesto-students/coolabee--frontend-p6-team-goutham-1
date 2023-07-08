import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Styles from './style.module.scss';

function Login() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: "100%",
        height: 400,
        paddingX:2
        
      },
    }}
  >
    <Paper elevation={3} >
        <div className={Styles.LoginMainDiv}>

        <TextField
          label="Email"
          id="outlined-size-small"
          defaultValue="Abc@gmail.com"
          size="small"
        />
        <TextField
          label="Password"
          id="outlined-size-small"
          defaultValue="Abc@gmail.com"
          size="small"
        />
        <div className={Styles.LoginForgotPassowordRow}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        <Link href="#" > Forgot Password</Link>
        </div>
        <Button variant="contained">Sign In</Button>
        <div  className={Styles.LoginAfterSignButtonRow}>
            <Typography>Don't Have Account?<Button variant="text">Sign Up</Button></Typography>
        </div>
        <Divider>or use your email for login</Divider>
        <div className={Styles.LoginAfterSignButtonRow} >
          <InstagramIcon/>
          <TwitterIcon/>
          <FacebookIcon/>
        </div>
        </div>
    </Paper>
  </Box>
  )
}

export default Login