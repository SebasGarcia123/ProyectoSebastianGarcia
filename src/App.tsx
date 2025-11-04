import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './componentes/Home'
import { Login } from './componentes/Login'
import { Ubicaciones } from './componentes/Ubicaciones'
import { Soluciones } from './componentes/Soluciones'
import { GrandesEmpresas } from './componentes/GrandesEmpresas'
import { Registro } from './componentes/Registro'
import { Cliente } from './componentes/Cliente'
import { NuevaReserva } from './componentes/NuevaReserva'
import { MisReservas } from './componentes/MisReservas'

const App = () => {
    return (
        <>
            <Router>
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
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path="/reserva" element={<NuevaReserva />} />
                    <Route path="/mis-reservas" element={<MisReservas />} />
                </Routes>    
            </Router>
        </>
    )
}
export default App
