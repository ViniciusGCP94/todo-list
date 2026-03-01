// src/components/Maquina/MaquinaCard.jsx
import { STATUS_COLORS, STATUS_MAQUINA } from "../../constants/statusColors";

function MaquinaCard({ maquina, onClick }) {

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex justify-between items-start mb-2">
            <span className="font-mono font-bold text-gray-200">
                {maquina.tag}
            </span>
        <span className={`${STATUS_COLORS[maquina.status]} text-white text-xs px-2 py-1 rounded-full`}>       {STATUS_MAQUINA[maquina.status]}
        </span>
        </div>
        <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-300">
                {maquina.nome}
            </h3>
            <p className="text-sm text-gray-300/70">
                Setor: {maquina.setor}
            </p>
        </div>

        <button 
        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-md text-sm font-medium transition-colors"
        onClick={onClick}>
            {maquina.status === "PARADA" ? "⚠️ ABRIR OS DE EMERGÊNCIA" : "Ver Detalhes / OS"}
        </button>
        
        <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-wider">
            Última intervenção: 12/05/2026
        </p>
    </div>
  );
}
export default MaquinaCard;