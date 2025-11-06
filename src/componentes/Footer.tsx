import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'grey.900',
                color: 'black',
                textAlign: 'center',
                py: 3,
                backgroundColor: 'rgba(136, 137, 138, 0.85)',
                width: '100%',
            }}
        >
            <Typography variant="body2">
                © 2025 Conexión 360 - Todos los derechos reservados
            </Typography>
        </Box>
    )
}
