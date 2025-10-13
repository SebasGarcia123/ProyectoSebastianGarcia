import { Box, Button, TextField, Typography } from '@mui/material'
import { Footer } from './Footer'
import fondo from '../assets/fondo-login.jpg'

export const Login = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
                pt: 1,
            }}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/*Formulario de Login */}
                <Box
                    sx={{
                        maxWidth: 400,
                        width: '90%', // Agregamos un width para mejor responsividad
                        p: 3,
                        border: '1px solid #0e0d0dff',
                        borderRadius: 4,
                        backgroundColor: 'rgba(243, 245, 246, 0.85)',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h4"
                        sx={{ textAlign: 'center', marginBottom: 3 }}
                    >
                        Ingrese sus datos para iniciar sesión
                    </Typography>
                    <TextField
                        id="username"
                        label="Usuario"
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        helperText="Ingrese un usuario registrado"
                    />
                    <TextField
                        id="password"
                        label="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        helperText="Ingrese su contraseña"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginTop: '16px',
                            marginInline: 'auto',
                            display: 'block',
                        }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
