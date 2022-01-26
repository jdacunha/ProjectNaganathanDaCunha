import { useState } from "react";
import TextField from '@mui/material/TextField';

function login() {
    return(
      <div className='login'>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
    );
  }
  
  export default login;