import { useState } from "react";
import TextField from '@mui/material/TextField';

function login() {
    return(
      <div className='login'>


        <h2><TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" /></h2>

      </div>
    );
  }
  
  export default login;