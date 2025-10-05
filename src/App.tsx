import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavInicio } from './componentes/NavInicio'
import { Home } from './componentes/Home'
import { Typography } from '@mui/material'

const App = () => {
  return (
    <Router>
      <NavInicio />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Typography variant="h4">Servicios</Typography>} />
          <Route path="/nosotros" element={<Typography variant="h4">Nosotros</Typography>} />
          <Route path="/contacto" element={<Typography variant="h4">Contacto</Typography>} />
          <Route path="/registro" element={<Typography variant="h4">Registro</Typography>} />
          <Route path="/login" element={<Typography variant="h4">Login</Typography>} />
        </Routes>
    </Router>
  )
}
export default App
