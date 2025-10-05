import { Box, Typography } from '@mui/material'
import foto from '../assets/foto_portada.jpg'

export const Home = () => {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box
        component="img"
        src= { foto }
        alt="Portada"
        sx={{ width: '100%', height: 'auto', margin: '0 auto', display: 'block', mt: 2}}
      />

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', textAlign: 'center', py: 3, mt: 2 }}>
        <Typography variant="body2">
          © 2025 Conexión 360 - Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  )
}
