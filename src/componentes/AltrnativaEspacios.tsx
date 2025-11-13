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
import type { ISpace } from '../types';

interface AlternativaEspaciosProps {
  onSelect?: (spaceId: string) => void;
}

export default function AlternativaEdificios({ onSelect }: AlternativaEspaciosProps) {
  const [spaces, setSpaces] = useState<ISpace[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // 🔹 Cargar espacios desde la API
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
  const token = sessionStorage.getItem("authToken");
  const res = await axios.get<ISpace[]>('http://localhost:4000/spaces', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
        setSpaces(res.data.filter((s) => s.isActive));
      } catch (error) {
        console.error('Error al obtener espacios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  // 🔹 Manejar selección
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const spaceId = event.target.value;
    setSelected(spaceId);
    if (onSelect) onSelect(spaceId);
  };

  if (loading) return <CircularProgress sx={{ margin: 2 }} />;

  return (
    <FormControl sx={{ margin: 2 }}>
      <FormLabel id="label-espacios" sx={{ margin: 1 }}>Filtrar por espacio</FormLabel>
      <RadioGroup
        aria-labelledby="label-espacios"
        name="radio-group-espacios"
        value={selected}
        onChange={handleChange}
      >
        {spaces.map((space) => (
          <FormControlLabel
            key={space._id}
            value={space._id}
            control={<Radio size="small" />}
            label={space.spaceType}
            sx={{ marginLeft:1}}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
