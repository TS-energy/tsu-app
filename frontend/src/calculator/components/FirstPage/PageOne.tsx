import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch,Link,Redirect 
} from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


import FormPropsTextFields from '../utils/template';
import SignUp from '../../../staticInfo/components/SignUp';
import Box from '@mui/material/Box';

const PageOne = ():JSX.Element =>{
  return(
    <Container maxWidth="sm">
      <Box component="form" 
      sx={{
         bgcolor: 'rgb(167 170 173)', height: '90vh'
      }}
      noValidate
      autoComplete="off"
      >
        <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          margin="normal"
          />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          margin="normal"
          />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" margin="normal"/>
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="normal"
        />
      </div>
      </Box>
    </Container>
  )
}

export default PageOne;
