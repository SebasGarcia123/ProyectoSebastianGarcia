import { Box, CircularProgress, Typography } from "@mui/material";
import { NavCliente } from "../componentes/NavCliente";
import SpaceCard from "../componentes/CardAlternativas";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { ISpace } from "../types"
import { Footer } from "../componentes/Footer"
import AlternativaEdificios from "../componentes/AlternativaEdificios";
import AlternativaEspacios from "../componentes/AlternativaEspacios";
import AlternativaFechas from "../componentes/AlternativaFechas"
import { Divider } from "@mui/material";
import AlternativaCapacidad from "../componentes/AlternativaCapacidad";


export const OpcionesParaReserva = () => {
  const [spaces, setSpaces] = useState<ISpace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filtroEdificios, setFiltroEdificio] = useState<string[]>([]);
  const [filtroEspacios, setFiltroEspacio] = useState<string[]>([]);
  const [filtroCapacidad, setFiltroCapacidad] = useState<string[]>([]);
  const [filtroDesde, setFiltroDesde] = useState<Date | null>(null);
  const [filtroHasta, setFiltroHasta] = useState<Date | null>(null);

  const filteredSpaces = spaces.filter((s) => {
  // Filtrar por edificio
  if (filtroEdificios.length > 0 && !filtroEdificios.includes(s.building.toString())) {
    return false;
  }

  // Filtrar por tipo de espacio
  if (filtroEspacios.length > 0 && !filtroEspacios.includes(s.spaceType)) {
    return false;
  }

  // Filtrar por capacidad
  if (filtroCapacidad.length > 0) {
    const cap = s.capacity;

    let cumpleCapacidad = false;

    if (filtroCapacidad.includes("1") && cap === 1) cumpleCapacidad = true;
    if (filtroCapacidad.includes("Entre 2 y 15") && cap >= 2 && cap <= 15) cumpleCapacidad = true;
    if (filtroCapacidad.includes("Entre 16 y 30") && cap >= 16 && cap <= 30) cumpleCapacidad = true;
    if (filtroCapacidad.includes("Más de 30") && cap > 30) cumpleCapacidad = true;

    if (!cumpleCapacidad) return false;
  }

  // Filtrar por fechas (si las estas usando)
  if (filtroDesde && new Date(s.dateFrom) > filtroDesde) return false;
  if (filtroHasta && new Date(s.dateTo) < filtroHasta) return false;

  return true;
});


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
        flexDirection: "row",
        gap: 5,
        flexGrow: 1,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
          py: 3,
          pr: 3,
        }}
      > 
          <Typography sx={{
                              color: "rgba(0, 0, 0, 0.87)",
                              margin: 3,
                              marginBottom: 4,
                              fontSize: "1.5rem",
                              fontFamily: `"Roboto", "Helvetica", "Arial", "sans-serif"`,
                          }}>
            Filtros
          </Typography>
        <Box sx={{ width: 200 }}>
        <AlternativaEspacios
          espacios={espacios}
          filtroTipo={filtroTipo}
          filtroCapacidad={filtroCapacidad}
          filtroRentType={filtroRentType}
          dateFrom={dateFrom}
          dateTo={dateTo}
        />
        </Box>
        <AlternativaEdificios 
          value={filtroEdificio}
          onChange={setFiltroEdificio}
        />
        <AlternativaEspacios 
          value={filtroEspacio}
          onChange={setFiltroEspacio}
        />
        <AlternativaCapacidad
          value={filtroCapacidad}
          onChange={setFiltroCapacidad}
        />
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
        {filteredSpaces.map((space) => (
          <SpaceCard key={space._id} space={space} />
        ))}
      </Box>
    </Box>

    <Footer />
  </Box>
);
};

