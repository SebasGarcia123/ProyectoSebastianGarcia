import { Button, Paper, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const FormularioNuevoEspacio = () => {
  const [formData, setFormData] = useState({
    pictureUrl: "",
    building: "",
    spaceType: "",
    description: "",
    capacity: "",
    pricePerDay: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    try {
        const token = sessionStorage.getItem("authToken");
        const res = await axios.post(
        "http://localhost:4000/spaces",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    if (res.status === 201) {
        alert("Espacio creado con éxito ✔");
        setFormData({
        pictureUrl: "",
        building: "",
        spaceType: "",
        description: "",
        capacity: "",
        pricePerDay: "",
        })
    }
    } catch (error: unknown) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.message || "Error al crear el espacio ❌");
    } else {
      alert("Error desconocido ❌");
    }
  }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: 500 }}>
      <h2 style={{ marginBottom: 20 }}>Nuevo Espacio</h2>

      <Stack spacing={2}>
        <TextField
          label="ID del Edificio"
          name="building"
          value={formData.building}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Tipo de Espacio"
          name="spaceType"
          value={formData.spaceType}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
        />

        <TextField
          label="Capacidad"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Precio por Día"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={handleChange}
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={sendData}
        >
          Guardar
        </Button>
      </Stack>
    </Paper>
  );
};