import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useMaintenanceStore } from '../store/useStore';
import Modal from '../components/Modal/Modal';

function MaquinaDetalhe() {
  const { id } = useParams();
  const adicionarOS = useMaintenanceStore((state) => state.adicionarOS);
  const maquina = useMaintenanceStore((state) => 
    state.maquinas.find((m) => m.id === id)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialState = {
    mecanico: '',
    tipo: 'Preventiva',
    criticidade: 'Média',
    descricao: ''
  };
  const [formData, setFormData] = useState(initialState);

  if (!maquina) return <div className="p-8 text-white">Máquina não encontrada</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.descricao.length < 15) {
      alert("A descrição deve ter no mínimo 15 caracteres.");
      return;
    }

    const novaOS = {
      id: crypto.randomUUID(),
      ...formData,
      dataAbertura: new Date().toLocaleDateString('pt-BR'),
    };

    adicionarOS(maquina.id, novaOS);
    setFormData(initialState);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 text-slate-200">
      <Link to="/maquinas" className="text-sm text-blue-400 hover:text-blue-300">&larr; Voltar</Link>

      <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{maquina.setor}</span>
            <h1 className="text-4xl font-bold mt-2">{maquina.nome}</h1>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-4">
            <h3 className="text-xl font-semibold text-slate-300">Histórico de Manutenção</h3>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              + Abrir Nova OS
            </button>
          </div>
          
          <div className="space-y-2">
            {maquina.historico?.map(os => (
              <div key={os.id} className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg flex justify-between">
                <span>{os.tipo} - {os.mecanico}</span>
                <span className="text-slate-500">{os.dataAbertura}</span>
              </div>
            )) || <p className="text-slate-500 text-sm">Nenhuma OS registrada.</p>}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} isClose={setIsModalOpen} titulo="Nova Ordem de Serviço">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-400">Mecânico Responsável</label>
            <input name="mecanico" value={formData.mecanico} onChange={handleChange} required className="bg-slate-900 border border-slate-700 p-2 rounded text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400">Tipo</label>
              <select name="tipo" value={formData.tipo} onChange={handleChange} className="bg-slate-900 border border-slate-700 p-2 rounded text-white">
                <option value="Preventiva">Preventiva</option>
                <option value="Corretiva">Corretiva</option>
                <option value="Preditiva">Preditiva</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-400">Criticidade</label>
              <select name="criticidade" value={formData.criticidade} onChange={handleChange} className="bg-slate-900 border border-slate-700 p-2 rounded text-white">
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
                <option value="Crítica">Crítica</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-400">Descrição do Problema</label>
            <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="No mínimo 15 caracteres..." className="bg-slate-900 border border-slate-700 p-2 rounded text-white h-24" />
          </div>

          <button type="submit" className="mt-2 bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg font-bold transition-colors">
            Salvar Ordem de Serviço
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default MaquinaDetalhe;