import React, { useState } from 'react';
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
import Alert from '@mui/material/Alert';
import Styles from './style.module.scss';
import { loginFetch } from '../../services/Auth/index';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [messageAlert, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    let lowerCaseEmail = email.toLowerCase();
    let logindata = await loginFetch({ email: lowerCaseEmail, password });
    // console.log(logindata)
    const { status } = logindata;
    if (status === 200) {
      const { message } = logindata;
      setMessage(message);
      let {
        data: { token },
      } = logindata;
      localStorage.setItem('token', token);
      setAlert(true);
    } else {
      const { message } = logindata;
      setErrorAlert(true);
      setMessage(message);
    }
  };

  return (
    <>
      {alert ? (
        <Alert
          severity="success"
          onClick={() => {
            setAlert(false);
          }}
        >
          {messageAlert ? messageAlert : 'Login Successfull'}
        </Alert>
      ) : (
        ''
      )}
      {errorAlert ? (
        <Alert
          severity="error"
          onClick={() => {
            setErrorAlert(false);
          }}
        >
          This is an error alert — <strong>{messageAlert}</strong>
        </Alert>
      ) : (
        ''
      )}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 400,
            paddingX: 2,
          },
        }}
      >
        <Paper elevation={3}>
          <div className={Styles.LoginMainDiv}>
            <TextField
              label="Email"
              id="outlined-size-small"
              defaultValue="Abc@gmail.com"
              size="small"
              onChange={handleEmailChange}
            />
            <TextField
              label="Password"
              id="outlined-size-small"
              defaultValue="Abc@gmail.com"
              size="small"
              type="password"
              onChange={handlePasswordChange}
            />
            <div className={Styles.LoginForgotPassowordRow}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
              <Link href="#"> Forgot Password</Link>
            </div>
            <Button variant="contained" onClick={handleSignIn}>
              Sign In
            </Button>
            <div className={Styles.LoginAfterSignButtonRow}>
              <Typography>
                Don't Have Account?<Button variant="text">Sign Up</Button>
              </Typography>
            </div>
            <Divider>or use your email for login</Divider>
            <div className={Styles.LoginAfterSignButtonRow}>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
            </div>
          </div>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
