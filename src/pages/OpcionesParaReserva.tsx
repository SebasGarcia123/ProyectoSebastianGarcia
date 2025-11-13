import { Box, CircularProgress, Typography } from "@mui/material";
import { NavCliente } from "../componentes/NavCliente";
import SpaceCard from "../componentes/CardAlternativas";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { ISpace } from "../types"
import { Footer } from "../componentes/Footer"
import AlternativaEdificios from "../componentes/AlternativaEdificios";
import AlternativaEspacios from "../componentes/AltrnativaEspacios";
import AlternativaFechas from "../componentes/AlternativaFechas"
import { Divider } from "@mui/material";


export const OpcionesParaReserva = () => {
  const [spaces, setSpaces] = useState<ISpace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSpaces = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (!token) {
          setError("No se encontró token de cliente. Debes iniciar sesión.");
          setLoading(false);
          return;
        }

        const { data } = await axios.get<ISpace[]>(
          "http://localhost:4000/spaces",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSpaces(data);
      } catch (err) {
  const error = err as AxiosError;
  console.error(error);
  if (error.response?.status === 401) {
    setError("No autorizado. El token puede estar expirado.");
  } else {
    setError("Ocurrió un error al cargar los espacios.");
  }
} finally {
  setLoading(false);
}
    };

    getSpaces();
  }, []);

  if (loading) {
    return (
      <>
        <NavCliente />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      </>
    );
  }

  return (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // 👈 ocupa toda la altura de la ventana
    }}
  >
    <NavCliente />

    {/* Contenido principal */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // 👈 corregido
        gap: 5,
        flexGrow: 1, // 👈 este ahora sí empuja el Footer hacia abajo
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 3,
          py: 5,
          pr: 3,
        }}
      >
        <AlternativaEdificios />
        <AlternativaEspacios />
        <Box sx={{ width: 200 }}>
          <AlternativaFechas />
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          p: 2,
          my: 5,
          flexGrow: 1,
        }}
      >
        {spaces.map((space) => (
          <SpaceCard key={space._id} space={space} />
        ))}
      </Box>
    </Box>

    <Footer />
  </Box>
);
};

