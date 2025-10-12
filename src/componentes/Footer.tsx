import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'grey.900',
                color: 'white',
                textAlign: 'center',
                py: 3,
                mt: 2,
            }}
        >
            <Typography variant="body2">
                © 2025 Conexión 360 - Todos los derechos reservados
            </Typography>
        </Box>
    )
}
