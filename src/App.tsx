import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavInicio } from './componentes/NavInicio'
import { Home } from './componentes/Home'
import { Login } from './componentes/Login'
import { Ubicaciones } from './componentes/Ubicaciones'
import { Soluciones } from './componentes/Soluciones'
import { GrandesEmpresas } from './componentes/GrandesEmpresas'
import { Registro } from './componentes/Registro'
import { Footer } from './componentes/Footer'
import { Cliente } from './componentes/Cliente'

const App = () => {
    return (
        <>
            <Router>
                <NavInicio />
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
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
export default App
