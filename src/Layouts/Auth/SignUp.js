import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Styles from './style.module.scss';
import { signUpFetch } from '../../services/Auth/index';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [messageAlert, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleMobileChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };

  const handleSignUp = async () => {
    if(password!==confirmpassword){
      setErrorAlert(true);
      setMessage("Password Mismatch")
      return;
    }
    let lowerCaseEmail = email.toLowerCase();
    let fullName = firstName + lastName;
    let logindata = await signUpFetch({
      fullName,
      email: lowerCaseEmail,
      password,
      phoneNumber,
    });
    // console.log(logindata);
    const { status } = logindata;
    if (status === 200) {
      const { message } = logindata;
      setMessage(message);
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
          {messageAlert ? messageAlert : 'User Registered Successfully.'}
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
          This is an error — <strong>{messageAlert?messageAlert:'All Fields Required'}</strong>
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
            height: 500,
            paddingX: 2,
            paddingY: 2,
          },
        }}
      >
        <Paper elevation={3}>
          <Typography variant="h5" style={{ color: '#51A9E5' }}>
            Welcome
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ color: 'lightgrey', marginBottom: '2vh' }}
          >
            Register Your Account
          </Typography>
          <div className={Styles.SignUpFormNamesRow}>
            <TextField
              label="First Name"
              id="outlined-size-small"
              size="small"
              onChange={handleFirstNameChange}
            />
            <TextField
              label="Last Name"
              id="outlined-size-small"
              size="small"
              onChange={handleLastNameChange}
            />
          </div>
          <div className={Styles.SignUpForm}>
            <TextField
              label="Email"
              id="outlined-size-small"
              size="small"
              onChange={handleEmailChange}
            />
            <TextField
              label="Mobile Number"
              id="outlined-size-small"
              defaultValue="9999999999"
              size="small"
              onChange={handleMobileChange}
            />
            <TextField
              label="Password"
              id="outlined-size-small"
              size="small"
              type="password"
              onChange={handlePasswordChange}
            />
            <TextField
              label="Confirm Password"
              id="outlined-size-small"
              size="small"
              type="password"
              onChange={handleConfirmPasswordChange}
            />
            <div className={Styles.LoginForgotPassowordRow}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I am Agree with Terms And Conditions."
              />
            </div>
            <Button variant="contained" onClick={handleSignUp}>
              Sign Up
            </Button>
            <div className={Styles.LoginAfterSignButtonRow}>
              <Typography>
                Already Have account?<Button variant="text">Sign In</Button>
              </Typography>
            </div>
          </div>
        </Paper>
      </Box>
    </>
  );
}

export default SignUp;
