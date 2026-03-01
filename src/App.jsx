import { useState } from 'react'; 
import { useMaintenanceStore } from './store/useStore';
import MaquinaCard from './components/Maquina/MaquinaCard';
import MaquinaForm from './components/Maquina/MaquinaForm'; 
import Modal from './components/Modal/Modal'; 
import OSCard from './components/OS/OSCard'; 
import OSForm from './components/OS/OSForm'; 

function App() {
  const maquinas = useMaintenanceStore((state) => state.maquinas);
  const ordensServico = useMaintenanceStore((state) => state.ordensServico);
  const [selectedTag, setSelectedTag] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOSModalOpen, setIsOSModalOpen] = useState(false);


  return (
    <div className="min-h-screen bg-black p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">GESTOR INDUSTRIAL</h1>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + CADASTRAR MÁQUINA
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {maquinas.map((m) => (
          <MaquinaCard 
            key={m.id} 
            maquina={m}
            onClick={() => {
              setSelectedTag(m.tag); 
              setIsOSModalOpen(true); 
            }} />
        ))}
      </div>

      <Modal 
      isOpen={isModalOpen} 
      isClose={() => setIsModalOpen(false)}
      titulo="Novo Equipamento">
        <h2 className="text-xl font-bold mb-4 text-slate-400/90">Cadastrar Novo Equipamento</h2>
        <MaquinaForm />
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {ordensServico.map((os) => (
          <OSCard key={os.id} os={os} />
        ))}
      </div>
      <Modal 
        isOpen={isOSModalOpen} 
        isClose={() => setIsOSModalOpen(false)}
        titulo="Gerar Ordem de Serviço"
      >
        <OSForm 
          maquinaTag={selectedTag} 
          onSuccess={() => setIsOSModalOpen(false)} 
        />
      </Modal>
    </div>
  );
}

export default App;