import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    MenuItem,
} from '@mui/material'
import fondo from '../assets/foto-registro.jpg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../componentes/Footer'
import { BarraSuperior } from '../componentes/BarraSuperior'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import type { Building, Space } from '../types' //, Reservation, RentType

export const NuevaReserva = () => {
    const [objData, setObjData] = useState({
        userId: '',
        dateFrom: '',
        dateTo: '',
        buildingId: '',
        spaceId: '',
        totalPrice: '',
        rentTipe: '',
    })

    const [buildings, setBuildings] = useState<Building[]>([])
    const [spaces, setSpaces] = useState<Space[]>([])

    const navigate = useNavigate()

    // 🔹 Cargar datos de edificios y espacios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [buildingsRes, spacesRes] = await Promise.all([
                    fetch('http://localhost:4000/buildings'),
                    fetch('http://localhost:4000/spaces'),
                ])
                const buildingsData = await buildingsRes.json()
                const spacesData = await spacesRes.json()
                setBuildings(buildingsData)
                setSpaces(spacesData)
            } catch (error) {
                console.error('Error cargando datos:', error)
            }
        }
        fetchData()
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setObjData((prev) => ({ ...prev, [name]: value }))
    }

    const sendData = async () => {
        try {
            const response = await fetch('http://localhost:4000/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(objData),
            })
            if (!response.ok) throw new Error('Error en la solicitud')

            const data = await response.json()
            console.log('Reserva creada:', data)
            navigate('/cliente')
        } catch (error) {
            console.error('Error al enviar los datos:', error)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        sendData()
    }

    return (
        <>
            <BarraSuperior />
            <Box
                sx={{
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '83vh',
                    width: '100%',
                    alignItems: 'center',
                    pt: 4,
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
                        mt: 3,
                        mb: 6,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ textAlign: 'center', mb: 5 }}
                    >
                        Complete los campos para generar una reserva
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            {/* 🔹 Building selector */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    select
                                    required
                                    name="buildingId"
                                    label="Edificio"
                                    variant="outlined"
                                    fullWidth
                                    value={objData.buildingId}
                                    onChange={handleChange}
                                >
                                    {buildings.map((b) => (
                                        <MenuItem key={b._id} value={b._id}>
                                            {b.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            {/* 🔹 Space selector */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    select
                                    required
                                    name="spaceId"
                                    label="Espacio"
                                    variant="outlined"
                                    fullWidth
                                    value={objData.spaceId}
                                    onChange={handleChange}
                                >
                                    {spaces
                                        .filter(
                                            (s) =>
                                                s.buildingId ===
                                                objData.buildingId
                                        )
                                        .map((s) => (
                                            <MenuItem key={s._id} value={s._id}>
                                                {s.name}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>

                            {/* 🔹 Fechas */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <DatePicker
                                        label="Fecha de inicio"
                                        value={
                                            objData.dateFrom
                                                ? dayjs(objData.dateFrom)
                                                : null
                                        }
                                        onChange={(date) =>
                                            setObjData((prev) => ({
                                                ...prev,
                                                dateFrom:
                                                    date?.toISOString() ?? '',
                                            }))
                                        }
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <DatePicker
                                        label="Fecha de finalización"
                                        value={
                                            objData.dateTo
                                                ? dayjs(objData.dateTo)
                                                : null
                                        }
                                        onChange={(date) =>
                                            setObjData((prev) => ({
                                                ...prev,
                                                dateFrom:
                                                    date?.toISOString() ?? '',
                                            }))
                                        }
                                    />
                                </Grid>
                            </LocalizationProvider>

                            {/* Ejemplo de otros campos */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    name="totalPrice"
                                    label="Precio total"
                                    variant="outlined"
                                    fullWidth
                                    value={objData.totalPrice}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    name="rentTipe"
                                    label="Tipo de renta"
                                    variant="outlined"
                                    fullWidth
                                    value={objData.rentTipe}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 4, display: 'block', mx: 'auto', px: 4 }}
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
