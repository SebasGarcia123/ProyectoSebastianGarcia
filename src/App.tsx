import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavInicio } from './componentes/NavInicio'
import { Home } from './componentes/Home'
import { Login } from './componentes/Login'
//import { Typography } from '@mui/material'

const App = () => {
  return (
    <Router>
      <NavInicio />
        <Routes>
           <Route path="/" element={<Home />} />
          {/*<Route path="/ubicaciones" element={<Typography variant="h4">Servicios</Typography>} />
          <Route path="/soluciones" element={<Typography variant="h4">Nosotros</Typography>} />
          <Route path="/grandes_empresas" element={<Typography variant="h4">Contacto</Typography>} />
          <Route path="/registro" element={<Typography variant="h4">Registro</Typography>} />*/}
          <Route path="/login" element={<Login />} /> 
        </Routes>
    </Router>
  )
}
export default App
