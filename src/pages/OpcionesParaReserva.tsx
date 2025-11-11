import { Box, CircularProgress, Typography } from "@mui/material";
import { NavCliente } from "../componentes/NavCliente";
import SpaceCard from "../componentes/CardAlternativas";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { ISpace } from "../types"
import AlternativaEdificios from "../componentes/AlternativaEdificios";
import AlternativaEspacios from "../componentes/AltrnativaEspacios";
import AlternativaFechas from "../componentes/AlternativaFechas"

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
        <NavCliente />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <NavCliente />
      <Box sx={{ display: "inline-block"}}>
        <AlternativaEdificios />
        <AlternativaEspacios />
        <Box sx={{width : 300}}>
        <AlternativaFechas />
        </Box>
        
      </Box>
      
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 2 }}>
        {spaces.map((space) => (
          <SpaceCard key={space._id} space={space} />
        ))}
      </Box>
    </>
  );
};

