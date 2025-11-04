import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import fondo from '../assets/foto-registro.jpg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Footer } from './Footer'
import { BarraSuperior } from './BarraSuperior'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const NuevaReserva = () => {


    const [objData, setObjData] = useState({userId:"", dateFrom:"", dateTo:"", SpaceId:"", totalPrice:"", rentTipe:""})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setObjData(prev => ({ ...prev, [name]: value }))
}
    const navigate = useNavigate()

    const senData = async() => {
        try {
            const response = await fetch('http://localhost:4000/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(objData),
    });
            if (!response.ok) {
                throw new Error('Error en la solicitud')
            }
            const data = await response.json()
            console.log('Respuesta del servidor:', data)

            // Agregar un popup donde diga que la reserva se generó con exito o que la muestre en algun tipo de formato
            navigate("/cliente")

        } catch (error) {
            console.error('Error al enviar los datos:', error)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando objData a una API
        console.log('Datos del formulario:', objData)
        senData();
    }

    return (
        <>
        <BarraSuperior />
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
                    marginTop: 3,
                    marginBottom: 6,
                }}
            >
                <Typography
                    variant="h6"
                    component="h4"
                    sx={{ textAlign: 'center', marginBottom: 5 }}
                >
                    Complete los campos para generar una reserva
                </Typography>

                <Box component="form" onSubmit={ handleSubmit }>
                    <Grid container spacing={4}>
                        {/* SpaceId */}
                        <Grid size = {{ xs:12, sm:6}}>
                            <TextField
                                required
                                name="spaceId"
                                label="Espacio a reservar"
                                type="text"
                                variant="outlined"
                                //sx={{ width: 239 }}
                                fullWidth
                            />
                        </Grid>

                       <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Fecha de inicio"
                                name="dateFrom"
                                onChange={(date) => setObjData(prev => ({...prev, dateFrom: date}))}
                            />

                            <DatePicker
                                label="Fecha de finalización"
                                name="dateTo"
                                onChange={(date) => setObjData(prev => ({...prev, dateTo: date}))}
                            />
                        </LocalizationProvider>

                        {/* Total Price */}
                        <Grid size = {{ xs:12, sm:6}}>
                            <TextField
                                required
                                name="lastName"
                                label="Apellido"
                                type="text"
                                variant="outlined"
                                onChange={handleChange}
                                sx={{ width: 239 }}
                            />
                        </Grid>
                        

                        {/* RentTipe */}
                        <Grid size = {{ xs:12, sm:6}}>
                            <TextField
                                required
                                name="document"
                                label="CUIT / CUIL"
                                type="text"
                                variant="outlined"
                                onChange={handleChange}
                                sx={{ width: 239 }}
                                helperText="Ingrese el número sin guiones ni espacios"
                            />
                        </Grid>
                    </Grid>
                    <Button
                    variant="contained"
                    color="primary"
                    type='submit'
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
        </Box>
        <Footer />
        </>
    )
}
