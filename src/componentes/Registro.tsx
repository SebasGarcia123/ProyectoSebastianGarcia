import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material'
import { Footer } from './Footer'
import fondo from '../assets/foto-registro.jpg'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const Registro = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }
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
                {/*Formulario de Registro */}
                <Box
                    sx={{
                        maxWidth: 400,
                        width: '90%',
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
                        Complete los campos para registrarse
                    </Typography>
                    <Box>
                        <TextField
                            required
                            id="nombre"
                            label="nombre"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText="Campo obligatorio"
                        />
                        <TextField
                            required
                            id="apellido"
                            label="apellido"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText="Ingrese su apellido"
                        />
                    </Box>

                    <FormControl
                        sx={{ m: 1, width: '25ch' }}
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Contraseña
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword
                                                ? 'hide the password'
                                                : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

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
