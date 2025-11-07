import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Ubicaciones } from '../pages/Ubicaciones'
import { Soluciones } from '../pages/Soluciones'
import { GrandesEmpresas } from '../pages/GrandesEmpresas'
import { Registro } from '../pages/Registro'
import { Cliente } from '../pages/Cliente'
import { NuevaReserva } from '../pages/NuevaReserva'
import { MisReservas } from '../pages/MisReservas'
import { PrivateRoutes } from './PrivateRoutes'

export const RoutesList = () => {
  return (
        <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ubicaciones" element={<Ubicaciones />} />
                    <Route path="/soluciones" element={<Soluciones />} />
                    <Route
                        path="/grandes_empresas"
                        element={<GrandesEmpresas />}
                    />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/login" element={<Login />} />
                    <Route element = { <PrivateRoutes />} >
                        <Route path="/cliente" element={<Cliente />} />
                        <Route path="/reserva" element={<NuevaReserva />} />
                        <Route path="/mis-reservas" element={<MisReservas />} />
                    </Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
