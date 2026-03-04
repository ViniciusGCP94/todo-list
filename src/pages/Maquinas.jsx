import {useMaintenanceStore} from '../store/useStore'
import MaquinaCard from '../components/Maquina/MaquinaCard'

function MaquinasPage() {
  const maquinas = useMaintenanceStore((state) => state.maquinas);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-slate-200">Maquinas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {maquinas.map((maquina) => (
          <MaquinaCard 
            key={maquina.id} 
            maquina={maquina} 
          />
        ))}
      </div>
      {maquinas.length === 0 && (
        <p className="text-gray-500 italic">Nenhuma máquina encontrada no sistema.</p>
      )}
    </div>
      
  )
}

export default MaquinasPage