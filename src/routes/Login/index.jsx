import React from 'react';
import { Container, Box, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}>
        <Box sx={{
            mt:4,
            width:'400px',
            display:'flex',
            flexDirection:'column',
            textAlign:'center',
            gap:1
        }}>
            <h1>Iniciar sesión</h1>
            <TextField id="username" label="Email" variant="outlined" type="email"/>
            <TextField id="password" label="Contraseña" variant="outlined" type="password"/>
            <Button sx={{mt:4}} variant="contained">Iniciar sesión</Button>
            <Button variant="outlined"><Link to='/register'>Registrarse</Link></Button>
        </Box>
    </Container>
  )
}

export { Login }