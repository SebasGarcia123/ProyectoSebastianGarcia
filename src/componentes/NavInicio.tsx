import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const NavInicio = () => {
    return (
        <AppBar position="static" sx={{ px: 2, backgroundColor: '#9e9e9e' }}>
            <Toolbar sx={{ height: 100, alignItems: 'center' }}>
                {/* Logo */}
                <Button
                    component={Link}
                    to="/"
                    sx={{
                        mr: 4,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: 0,
                        padding: 0,
                        borderRadius: 2,
                        '&:hover': { backgroundColor: 'transparent' },
                    }}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        width="200"
                        style={{ borderRadius: '5px' }}
                    />
                </Button>
                {/* Links izquierda */}
                <Box sx={{ flexGrow: 1 }}>
                    <Button component={Link} to="/ubicaciones" color="inherit">
                        Ubicaciones
                    </Button>
                    <Button component={Link} to="/soluciones" color="inherit">
                        Soluciones
                    </Button>
                    <Button
                        component={Link}
                        to="/grandes-empresas"
                        color="inherit"
                    >
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
