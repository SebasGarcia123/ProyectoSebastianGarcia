import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  CircularProgress,
} from '@mui/material';
import type { Building } from '../types';

interface AlternativaEdificiosProps {
  onSelect?: (buildingId: string) => void;
}

export default function AlternativaEdificios({ onSelect }: AlternativaEdificiosProps) {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // 🔹 Cargar edificios desde la API
  useEffect(() => {
    const fetchBuildings = async () => {
      try {
  const token = sessionStorage.getItem("authToken");
  const res = await axios.get<Building[]>('http://localhost:4000/buildings', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
        setBuildings(res.data.filter((b) => b.isActive));
      } catch (error) {
        console.error('Error al obtener edificios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuildings();
  }, []);

  // 🔹 Manejar selección
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const buildingId = event.target.value;
    setSelected(buildingId);
    if (onSelect) onSelect(buildingId);
  };

  if (loading) return <CircularProgress sx={{ margin: 2 }} />;

  return (
    <FormControl sx={{ margin: 2 }}>
      <FormLabel id="label-edificios" sx={{ margin: 1 }}>Filtrar por edificio</FormLabel>
      <RadioGroup
        aria-labelledby="label-edificios"
        name="radio-group-edificios"
        value={selected}
        onChange={handleChange}
      >
        {buildings.map((building) => (
          <FormControlLabel
            key={building._id}
            value={building._id}
            control={<Radio size="small" />}
            label={building.name}
            sx={{ marginLeft:1}}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
