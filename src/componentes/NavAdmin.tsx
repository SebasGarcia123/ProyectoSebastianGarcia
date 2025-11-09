import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { BotonLogout } from './BotonLogout'

export const NavAdmin = () => {
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
                <Box sx={{ flexGrow: 1, marginRight: 3 }}>
                    <Button
                        component={Link}
                        to="/manageUsers"
                        color="inherit"
                        sx={{ marginRight: 3, fontSize: 20 }}
                    >
                        Administrar Usuarios
                    </Button>
                    <Button
                        component={Link}
                        to="/reserva"
                        color="inherit"
                        sx={{ marginRight: 3, fontSize: 20 }}
                    >
                        Nuevo Recurso
                    </Button>
                    <Button
                        component={Link}
                        to="/reserva"
                        color="inherit"
                        sx={{ marginRight: 3, fontSize: 20 }}
                    >
                        Estadísticas
                    </Button>
                </Box>

                {/* Links derecha */}
                <BotonLogout />
            </Toolbar>
        </AppBar>
    )
}