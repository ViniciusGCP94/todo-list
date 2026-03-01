import { useState } from 'react';
import { useMaintenanceStore } from '../../store/useStore';

function MaquinaForm({ onSuccess }) {
  const addMaquina = useMaintenanceStore((state) => state.addMaquina);
  const [tag, setTag] = useState('');
  const [nome, setNome] = useState('');
  const [setor, setSetor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMaquina({ tag, nome, setor, status: "OPERANDO" });
    setTag('');
    setNome('');
    setSetor('');

    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tag da Máquina"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="bg-indigo-900/50 text-white border border-slate-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Nome da Máquina"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="bg-indigo-900/50 text-white border border-slate-300 p-2 rounded"
        />
        <select 
          value={setor} 
          onChange={(e) => setSetor(e.target.value)}
          className="bg-indigo-900/50 text-white border border-slate-300 p-2 rounded"
        >
            <option value="">Selecione o Setor</option>
            <option value="Usinagem">Usinagem</option>
            <option value="Estamparia">Estamparia</option>
            <option value="Montagem">Montagem</option>
            <option value="Caldeiraria">Caldeiraria</option>
        </select>

        <button type="submit" className="bg-sky-500 text-white p-2 rounded">
          Salvar Equipamento
        </button>
    </form>
  );
}
export default MaquinaForm;