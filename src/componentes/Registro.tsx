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
                alignItems: 'center',
                pt: 4,
                flexGrow: 1,
            }}
        >
            <Box
                sx={{
                    maxWidth: 650,
                    width: '90%',
                    p: 4,
                    border: '1px solid #0e0d0dff',
                    borderRadius: 4,
                    backgroundColor: 'rgba(243, 245, 246, 0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '400px',
                    // 3. Solución Footer: Usar flexGrow para empujar el Footer al fondo
                    //flexGrow: 1, 
                    // Removí justifyContent/alignItems de aquí para que el formulario fluya
                }}
            >
                <Typography
                    variant="h6"
                    component="h4"
                    sx={{ textAlign: 'center', marginBottom: 3 }}
                >
                    Complete los campos para registrarse
                </Typography>

                <Box component="form">
                    <Grid container spacing={2}>
                        {/* Nombre */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="nombre"
                                label="Nombre"
                                type="text"
                                variant="outlined"
                                fullWidth
                                // 2. Solución Margen: Eliminar helperText para que la altura sea uniforme
                                // helperText="Campo obligatorio" 
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
                                fullWidth
                                // 2. Solución Margen: Eliminar helperText
                                // helperText="Ingrese su apellido"
                            />
                        </Grid>

                        {/* Contraseña - Uso de FormControl es correcto */}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Contraseña
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    // ... EndAdornment y otros props de contraseña
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

                        {/* Repetir contraseña - Uso de FormControl es correcto */}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password2">
                                    Repetir contraseña
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password2"
                                    type={showPassword ? 'text' : 'password'}
                                    // ... EndAdornment y otros props
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
                                fullWidth
                                // 2. Solución Margen: Eliminar helperText
                                // helperText="Sin O ni prefijo 15"
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
                                fullWidth
                                // 2. Solución Margen: Eliminar helperText
                                // helperText="Ingrese el número sin guiones ni espacios"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: '24px',
                        marginInline: 'auto',
                        display: 'block',
                        px: 4,
                    }}
                >
                    Enviar
                </Button>
            </Box>
            <Footer />
        </Box>
    )
}

// import {
//     Box,
//     Button,
//     FormControl,
//     Grid,
//     IconButton,
//     InputAdornment,
//     InputLabel,
//     OutlinedInput,
//     TextField,
//     Typography,
// } from '@mui/material'
// import { Footer } from './Footer'
// import fondo from '../assets/foto-registro.jpg'
// import { useState } from 'react'
// import { Visibility, VisibilityOff } from '@mui/icons-material'

// export const Registro = () => {
//     const [showPassword, setShowPassword] = useState(false)

//     const handleClickShowPassword = () => setShowPassword((show) => !show)

//     const handleMouseDownPassword = (
//         event: React.MouseEvent<HTMLButtonElement>
//     ) => {
//         event.preventDefault()
//     }

//     const handleMouseUpPassword = (
//         event: React.MouseEvent<HTMLButtonElement>
//     ) => {
//         event.preventDefault()
//     }
//     return (
//         <Box
//             sx={{
//                 backgroundImage: `url(${fondo})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 minHeight: '100vh',
//                 width: '100%',
//                 pt: 1,
//             }}
//         >
//             <Box
//                 sx={{
//                     maxWidth: 700,
//                     width: '90%',
//                     p: 4,
//                     border: '1px solid #0e0d0dff',
//                     borderRadius: 4,
//                     backgroundColor: 'rgba(243, 245, 246, 0.85)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center'

//                 }}
//             >
//                 <Typography
//                     variant="h6"
//                     component="h4"
//                     sx={{ textAlign: 'center', marginBottom: 3 }}
//                 >
//                     Complete los campos para registrarse
//                 </Typography>

//                 <Box component="form">
//                     <Grid container spacing={2}>
//                         {/* Nombre */}
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="nombre"
//                                 label="Nombre"
//                                 type="text"
//                                 variant="outlined"
//                                 fullWidth
//                                 helperText="Campo obligatorio"
//                             />
//                         </Grid>

//                         {/* Apellido */}
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="apellido"
//                                 label="Apellido"
//                                 type="text"
//                                 variant="outlined"
//                                 fullWidth
//                                 helperText="Ingrese su apellido"
//                             />
//                         </Grid>

//                         {/* Contraseña */}
//                         <Grid item xs={12} sm={6}>
//                             <FormControl fullWidth variant="outlined">
//                                 <InputLabel htmlFor="outlined-adornment-password">
//                                     Contraseña
//                                 </InputLabel>
//                                 <OutlinedInput
//                                     id="outlined-adornment-password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label={
//                                                     showPassword
//                                                         ? 'hide the password'
//                                                         : 'display the password'
//                                                 }
//                                                 onClick={
//                                                     handleClickShowPassword
//                                                 }
//                                                 onMouseDown={
//                                                     handleMouseDownPassword
//                                                 }
//                                                 onMouseUp={
//                                                     handleMouseUpPassword
//                                                 }
//                                                 edge="end"
//                                             >
//                                                 {showPassword ? (
//                                                     <VisibilityOff />
//                                                 ) : (
//                                                     <Visibility />
//                                                 )}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                     label="Contraseña"
//                                 />
//                             </FormControl>
//                         </Grid>

//                         {/* Repetir contraseña */}
//                         <Grid item xs={12} sm={6}>
//                             <FormControl fullWidth variant="outlined">
//                                 <InputLabel htmlFor="outlined-adornment-password2">
//                                     Repetir contraseña
//                                 </InputLabel>
//                                 <OutlinedInput
//                                     id="outlined-adornment-password2"
//                                     type={showPassword ? 'text' : 'password'}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 onClick={
//                                                     handleClickShowPassword
//                                                 }
//                                                 onMouseDown={
//                                                     handleMouseDownPassword
//                                                 }
//                                                 onMouseUp={
//                                                     handleMouseUpPassword
//                                                 }
//                                                 edge="end"
//                                             >
//                                                 {showPassword ? (
//                                                     <VisibilityOff />
//                                                 ) : (
//                                                     <Visibility />
//                                                 )}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                     label="Repetir contraseña"
//                                 />
//                             </FormControl>
//                         </Grid>

//                         {/* Teléfono */}
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="telefono"
//                                 label="Teléfono"
//                                 type="text"
//                                 variant="outlined"
//                                 fullWidth
//                                 helperText="Sin O ni prefijo 15"
//                             />
//                         </Grid>

//                         {/* CUIL */}
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 required
//                                 id="cuil"
//                                 label="CUIT / CUIL"
//                                 type="text"
//                                 variant="outlined"
//                                 fullWidth
//                                 helperText="Ingrese el número sin guiones ni espacios"
//                             />
//                         </Grid>
//                     </Grid>
//                     </Box>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         sx={{
//                             marginTop: '24px',
//                             marginInline: 'auto',
//                             display: 'block',
//                             px: 4,
//                         }}
//                     >
//                         Enviar
//                     </Button>
                
//             </Box>
//         <Footer />    
//         </Box>
        
//     )
// }
