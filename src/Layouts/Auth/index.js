/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SignUp from './SignUp';
import Login from './Login';
import Styles from './style.module.scss';

function index() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={Styles.AuthMainDiv}>
      <div
      className={Styles.AuthLeftDiv}
        
      >
        <Box sx={{ width: '50%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Sign In" value="1" />
                <Tab label="Sign Up" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <Login/>
            </TabPanel>
            <TabPanel value="2">
                <SignUp/>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <div
      className={Styles.AuthRightMainDiv}
      >
        <div
          className={Styles.AuthRightInnerDiv}
        ></div>
      </div>
    </div>
  );
}

export default index;
