import { useState } from 'react';
import { useMaintenanceStore } from '../../store/useStore';

function OSForm({ maquinaTag, onSuccess }) {
  const addOS = useMaintenanceStore((state) => state.addOS);
  
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('MEDIA');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addOS({
      maquinaTag,
      titulo,
      descricao,
      prioridade,
      status: 'ABERTA'
    });

    setTitulo('');
    setDescricao('');
    
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded">
          EQUIPAMENTO: {maquinaTag}
        </h3>
      </div>

      <input
        type="text"
        placeholder="Título do Problema (ex: Ruído no rolamento)"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="bg-indigo-900/50 text-white border border-white/10 p-3 rounded-xl focus:border-sky-500 outline-none"
        required
      />

      <textarea
        placeholder="Descrição detalhada da falha..."
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="bg-indigo-900/50 text-white border border-white/10 p-3 rounded-xl h-32 resize-none focus:border-sky-500 outline-none"
        required
      />

      <div className="flex flex-col gap-2">
        <label className="text-xs text-gray-400 uppercase font-bold ml-1">Prioridade</label>
        <select 
          value={prioridade} 
          onChange={(e) => setPrioridade(e.target.value)}
          className="bg-indigo-900/50 text-white border border-white/10 p-3 rounded-xl outline-none"
        >
          <option value="BAIXA">Baixa - Preventiva</option>
          <option value="MEDIA">Média - Corretiva Planejada</option>
          <option value="ALTA">Alta - Risco de Parada</option>
          <option value="URGENTE">Urgente - MÁQUINA PARADA</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="bg-sky-500 hover:bg-sky-400 text-white font-bold p-4 rounded-xl shadow-lg transition-all mt-2"
      >
        GERAR ORDEM DE SERVIÇO
      </button>
    </form>
  );
}
export default OSForm;