import * as React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = (props) => (
    <TextField
        variant='standard'
        fullWidth
        InputLabelProps={{ style: { color: '#3e3e3e' } }}
        {...props}
    />
);

export default CustomTextField;