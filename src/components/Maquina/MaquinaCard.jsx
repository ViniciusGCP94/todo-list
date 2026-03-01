// src/components/Maquina/MaquinaCard.jsx
import { STATUS_COLORS, STATUS_MAQUINA } from "../../constants/statusColors";

function MaquinaCard({ maquina, onClick }) {
  // Dica: Use a 'maquina.status' como chave para buscar em STATUS_COLORS

  
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        {/* TODO: Header - Tag e Criticidade */}
        <div className="flex justify-between items-start mb-2">
            <span className="font-mono font-bold text-gray-200">
                {maquina.tag}
            </span>
        {/* Use flex justify-between. A Tag deve ser negrito (bold) */}
        

        {/* TODO: Indicador Visual de Status (Badge) */}
        <span className={`${STATUS_COLORS[maquina.status]} text-white text-xs px-2 py-1 rounded-full`}>       {STATUS_MAQUINA[maquina.status]}
        </span>
        {/* Dica: <span className={`${STATUS_COLORS[maquina.status]} text-white px-2 py-1 rounded text-xs`}> */}
        </div>
        {/* TODO: Corpo - Nome da Máquina e Setor */}
        <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-300">
                {/* TODO: Coloque o NOME da máquina aqui */}
                {maquina.nome}
            </h3>
            <p className="text-sm text-gray-300/70">
                Setor: {/* TODO: Coloque o SETOR aqui */}
                {maquina.setor}
            </p>
        </div>

        {/* Botão de ação rápida */}
        <button 
        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-md text-sm font-medium transition-colors"
        onClick={onClick}>
            {maquina.status === "PARADA" ? "⚠️ ABRIR OS DE EMERGÊNCIA" : "Ver Detalhes / OS"}
        </button>
        
        {/* TODO: Footer - Data da última manutenção ou botão rápido */}
        <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-wider">
            Última intervenção: 12/05/2026
        </p>
    </div>
  );
}
export default MaquinaCard;