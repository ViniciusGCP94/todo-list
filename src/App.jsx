import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import MaquinasPage from './pages/Maquinas';
import MaquinaDetalhe from './pages/MaquinaDetalhe';
import OrdensServico from './pages/OrdensServico';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="maquinas" element={<MaquinasPage />} />
          {/* O ":id" permite que o useParams capture o identificador único */}
          <Route path="maquinas/:id" element={<MaquinaDetalhe />} />
          <Route path="ordens" element={<OrdensServico />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;