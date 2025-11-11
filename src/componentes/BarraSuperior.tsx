import { AppBar, Toolbar, Button, Box } from '@mui/material'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"


import { useLocation } from "react-router-dom"

export const BarraSuperior = () => {
    const location = useLocation()
    const navigate = useNavigate()

    if (location.pathname === "/login") return null
    if (location.pathname === "/registro") return null

    return (
        <AppBar position="static" sx={{ px: 2, backgroundColor: '#efeaeaff', color: '#0265baff' }}>
            <Toolbar sx={{ height: 70, alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                    {/* Logo */}
                        <img
                            src={logo}
                            alt="Logo"
                            width="200"
                            style={{ borderRadius: '5px' }}
                        />
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
