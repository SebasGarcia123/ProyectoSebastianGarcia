import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const NavInicio = () => {
    return (
        <AppBar position="static" sx={{ px: 2, backgroundColor: '#9e9e9e' }}>
            <Toolbar>
                {/* Logo */}
                <Typography
                    variant="h6"
                    sx={{ mr: 4, p: 2, display: 'flex', alignItems: 'center' }}
                >
                    <img src={logo} alt="Logo" width="200" />
                </Typography>

                {/* Links izquierda */}
                <Box sx={{ flexGrow: 1 }}>
                    <Button component={Link} to="/ubicaciones" color="inherit">
                        Ubicaciones
                    </Button>
                    <Button component={Link} to="/soluciones" color="inherit">
                        Soluciones
                    </Button>
                    <Button component={Link} to="/grandes-empresas" color="inherit">
                        Grandes empresas
                    </Button>
                </Box>

                {/* Links derecha */}
                <Button
                    component={Link}
                    to="/registro"
                    color="primary"
                    variant="outlined"
                    sx={{ mr: 2, backgroundColor: '#fafafa' }}
                >
                    Registrarse
                </Button>
                <Button
                    component={Link}
                    to="/Login"
                    color="primary"
                    variant="contained"
                >
                    Iniciar Sesión
                </Button>
            </Toolbar>
        </AppBar>
    )
}
