import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';

// Page imports
import { Panel } from './pages/Panel';
import { Inbox } from './pages/Inbox';
import { Configuracion } from './pages/Configuracion';

// Horizon pages
import { Inmuebles } from './pages/horizon/Inmuebles';
import { Tesoreria } from './pages/horizon/Tesoreria';
import { Fiscalidad } from './pages/horizon/Fiscalidad';
import { Proyeccion } from './pages/horizon/Proyeccion';

// Pulse pages
import { Ingresos } from './pages/pulse/Ingresos';
import { Gastos } from './pages/pulse/Gastos';
import { TesoreriaPersonal } from './pages/pulse/TesoreriaPersonal';
import { ProyeccionPersonal } from './pages/pulse/ProyeccionPersonal';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Redirect root to panel */}
            <Route index element={<Navigate to="/panel" replace />} />
            
            {/* Shared routes */}
            <Route path="/panel" element={<Panel />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/configuracion" element={<Configuracion />} />
            
            {/* Horizon routes */}
            <Route path="/inmuebles" element={<Inmuebles />} />
            <Route path="/tesoreria" element={<Tesoreria />} />
            <Route path="/fiscalidad" element={<Fiscalidad />} />
            <Route path="/proyeccion" element={<Proyeccion />} />
            
            {/* Pulse routes */}
            <Route path="/ingresos" element={<Ingresos />} />
            <Route path="/gastos" element={<Gastos />} />
            <Route path="/tesoreria-personal" element={<TesoreriaPersonal />} />
            <Route path="/proyeccion-personal" element={<ProyeccionPersonal />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
