import { Grid, TextField, Button, Box, Alert,} from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const SendPassswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        if (actualData.email && actualData.password) {
            console.log(actualData);

            document.getElementById('login-form').reset()
            setError({ status: true, msg: "Login Success", type: 'success' })
            navigate('/dashboard')
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
    }
    return <>
        <Grid container>
            <Grid item sm={6} xs={12}>
                <Box component='form' noValidate sx={{ mt: 5 }} id='password-reset-form' onSubmit={handleSubmit}>
                    <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
                    <Box textAlign='center'>
                        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
                    </Box>
                    <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
                    {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
                </Box>...
            </Grid>
        </Grid>
    </>;
};

export default SendPassswordResetEmail;