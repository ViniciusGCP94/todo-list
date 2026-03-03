import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/Layout/MainLayout';
import Maquinas from './pages/Maquinas';
import OrdensServico from './pages/OrdensServico';
import MaquinaDetalhe from './pages/MaquinaDetalhe';


function App() {
  /*const maquinas = useMaintenanceStore((state) => state.maquinas);
  const ordensServico = useMaintenanceStore((state) => state.ordensServico);
  const [selectedTag, setSelectedTag] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOSModalOpen, setIsOSModalOpen] = useState(false);*/


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="maquinas" element={<Maquinas />} />
          <Route path="ordens" element={<OrdensServico />} />
          <Route path="maquinas/:id" element={<MaquinaDetalhe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;