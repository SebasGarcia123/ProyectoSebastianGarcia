import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material'
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
                minHeight: '83vh', 
                width: '100%',
                alignItems: 'center',
                pt: 4,
                flexGrow: 1,
            }}
        >
            <Box
                sx={{
                    maxWidth: 650,
                    width: '100%',
                    p: 4,
                    border: '1px solid #0e0d0dff',
                    borderRadius: 4,
                    backgroundColor: 'rgba(243, 245, 246, 0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 10,
                    //minHeight: '500px',
                    //justifyContent: 'center',
                    //alignItems: 'center',
                }}
            >
                <Typography
                    variant="h6"
                    component="h4"
                    sx={{ textAlign: 'center', marginBottom: 5 }}
                >
                    Complete los campos para registrarse
                </Typography>

                <Box component="form">
                    <Grid container spacing={4}>
                        {/* Nombre */}
                        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                required
                                id="nombre"
                                label="Nombre"
                                type="text"
                                variant="outlined"
                                sx={{ width: 239, marginRight: 3 }}
                            />
                        </Grid>

                        {/* Apellido */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="apellido"
                                label="Apellido"
                                type="text"
                                variant="outlined"
                                sx={{ width: 239 }}
                            />
                        </Grid>

                        {/* Contraseña */}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Contraseña
                                </InputLabel>
                                <OutlinedInput
                                    sx={{ marginRight: 3 }}
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
                                    label="Contraseña"
                                />
                            </FormControl>
                        </Grid>

                        {/* Repetir contraseña */}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password2">
                                    Repetir contraseña
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password2"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
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
                                    label="Repetir contraseña"
                                />
                            </FormControl>
                        </Grid>

                        {/* Teléfono */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="telefono"
                                label="Teléfono"
                                type="text"
                                variant="outlined"
                                sx={{ width: 239, marginRight: 3 }}
                                helperText="Sin O ni prefijo 15"
                            />
                        </Grid>

                        {/* CUIL */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cuil"
                                label="CUIT / CUIL"
                                type="text"
                                variant="outlined"
                                sx={{ width: 239 }}
                                helperText="Ingrese el número sin guiones ni espacios"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: '40px',
                        marginInline: 'auto',
                        display: 'block',
                        px: 4,
                    }}
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    )
}
