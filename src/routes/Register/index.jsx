import React from 'react';
import { Container, TextField, Button, Box } from '@mui/material';

const Register = () => {
    const [rePasswordError, setRePasswordError] = React.useState(false);

    const registerUser = () => {
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rePassword = document.getElementById('re-password').value;

        if (password !== rePassword) { setRePasswordError(true) } 
        else { setRePasswordError(false) }
    }
    return (
        <Container sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Box 
            component="form"
            type='POST'
            onSubmit={registerUser} 
            sx={{
                mt:4,
                width:'400px',
                display:'flex',
                flexDirection:'column',
                gap:1
            }}>
                <h1>Registro</h1>
                <TextField required id="username" label="Nombre de usuario" variant="outlined" type="text"/>
                <TextField required id="email" label="Email" variant="outlined" type="email"/>
                <Button type="submit" sx={{mt:4}} variant="contained">Registrarse</Button>
            </Box>
        </Container>
  )
}

export { Register }