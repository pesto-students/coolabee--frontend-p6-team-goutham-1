import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Styles from './style.module.scss';

function SignUp() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 500,
          paddingX: 2,
          paddingY:2
        },
      }}
    >
      <Paper elevation={3}>
        <Typography variant="h5" style={{ color: '#51A9E5' }}>
          Welcome
        </Typography>
        <Typography variant="subtitle1" gutterBottom style={{color:'lightgrey',marginBottom:'2vh'}}>
          Register Your Account
        </Typography>
        <div className={Styles.SignUpFormNamesRow}>
        <TextField
            label="First Name"
            id="outlined-size-small"
            defaultValue="Abc@gmail.com"
            size="small"
          />
          <TextField
            label="Last Name"
            id="outlined-size-small"
            defaultValue="Abc@gmail.com"
            size="small"
          />
          </div>
        <div
         className={Styles.SignUpForm}
        >
          <TextField
            label="Email"
            id="outlined-size-small"
            defaultValue="Abc@gmail.com"
            size="small"
          />
          <TextField
            label="Mobile Number"
            id="outlined-size-small"
            defaultValue="9999999999"
            size="small"
          />
          <TextField
            label="Password"
            id="outlined-size-small"
            defaultValue="Abc@gmail.com"
            size="small"
            type="password"
          />
          <TextField
            label="Confirm Password"
            id="outlined-size-small"
            defaultValue="Abc@gmail.com"
            size="small"
            type="password"
          />
          <div className={Styles.LoginForgotPassowordRow}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I am Agree with Terms And Conditions."
            />

          </div>
          <Button variant="contained">Sign Up</Button>
          <div className={Styles.LoginAfterSignButtonRow}>
            <Typography>
              Already Have account?<Button variant="text">Sign In</Button>
            </Typography>
          </div>
        </div>
      </Paper>
    </Box>
  );
}

export default SignUp;
