import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import fondo from '../assets/foto-registro.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Footer } from '../componentes/Footer';
import { BarraSuperior } from '../componentes/BarraSuperior';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import type { ISpace, RentType } from '../types';

export const NuevaReserva = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const space: ISpace | undefined = location.state?.space;

  const [objData, setObjData] = useState({
    userId: '', // Aquí deberías poner el userId del usuario logueado
    spaceId: space?._id || '',
    buildingId: space?.building?._id || '',
    dateFrom: '',
    dateTo: '',
    totalPrice: space?.pricePerDay || 0,
    rentType: '',
  });

  // 🔹 Manejo de cambios de RentType
  const handleRentTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rentType = e.target.value as RentType;
    setObjData(prev => ({ ...prev, rentType }));
    if (objData.dateFrom) {
      handleDateOrRentChange(dayjs(objData.dateFrom), rentType);
    }
  };

  // 🔹 Calcular automáticamente dateTo y totalPrice
  const handleDateOrRentChange = (date: Dayjs | null, rentType?: RentType) => {
    if (!date || !space) return;

    const type = rentType || objData.rentType;
    let endDate = date;

    switch (type) {
      case 'Dia':
        endDate = date.add(1, 'day');
        break;
      case 'Semana':
        endDate = date.add(7, 'week');
        break;
      case 'Mes':
        endDate = date.add(30, 'month');
        break;
      case 'Año':
        endDate = date.add(365, 'year');
        break;
    }

    // Calcular totalPrice
    let multiplier = 1;
    switch (type) {
      case 'Dia':
        multiplier = 1;
        break;
      case 'Semana':
        multiplier = 7;
        break;
      case 'Mes':
        multiplier = 30;
        break;
      case 'Año':
        multiplier = 365;
        break;
    }

    const totalPrice = space.pricePerDay * multiplier;

    setObjData(prev => ({
      ...prev,
      dateFrom: date.toISOString(),
      dateTo: endDate.toISOString(),
      totalPrice,
    }));
  };

  // 🔹 Enviar datos al backend
  const sendData = async () => {
  try {
    const token = sessionStorage.getItem('authToken');

    const response = await axios.post(
      'http://localhost:4000/reservations',
      objData,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Reserva creada:', response.data);
    navigate('/cliente');
  } catch (error) {
    console.error('Error al crear la reserva:', error);
  }
};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendData();
  };

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
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 5 }}>
            Complete los campos para generar una reserva
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              {/* 🔹 Building */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Edificio"
                  variant="outlined"
                  fullWidth
                  value={space?.building?.name || 'Nombre de edificio no disponible'}
                />
              </Grid>

              {/* 🔹 Space */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Espacio"
                  variant="outlined"
                  fullWidth
                  value={space?.spaceType || 'Nombre de espacio no disponible'}
                />
              </Grid>

              {/* 🔹 RentType */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  select
                  label="Tipo de renta"
                  variant="outlined"
                  fullWidth
                  value={objData.rentType}
                  onChange={handleRentTypeChange}
                >
                  {['Dia', 'Semana', 'Mes', 'Año'].map(type => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* 🔹 Fechas */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <DatePicker
                    label="Fecha de inicio"
                    value={objData.dateFrom ? dayjs(objData.dateFrom) : null}
                    onChange={date => handleDateOrRentChange(date)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <DatePicker
                    label="Fecha de finalización"
                    value={objData.dateTo ? dayjs(objData.dateTo) : null}
                    readOnly
                  />
                </Grid>
              </LocalizationProvider>

              {/* 🔹 TotalPrice */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Precio total"
                  variant="outlined"
                  fullWidth
                  value={objData.totalPrice}
                  InputProps={{ readOnly: true }}
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
  );
};
