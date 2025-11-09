import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"


import { useLocation } from "react-router-dom"

export const BarraSuperior = () => {
    const location = useLocation()
    const navigate = useNavigate()

    if (location.pathname === "/login") return null
    if (location.pathname === "/registro") return null

    return (
        <AppBar position="static" sx={{ px: 2, backgroundColor: '#9e9e9e' }}>
            <Toolbar sx={{ height: 100, alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                    {/* Logo */}
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            mr: 4,
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
                </Box>
                <Button
                    color="primary"
                    onClick={() => navigate(-1)}
                    variant="contained"
                >
                    Volver
                </Button>
            </Toolbar>
        </AppBar>
    )
}
