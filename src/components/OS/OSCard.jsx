import { PRIORIDADE_COLORS } from "../../constants/statusColors";

function OSCard({os}){
    return (
        <div className="bg-indigo-900 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
            <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-sky-400 bg-sky-700/50 px-2 py-1 rounded">
                    {os.maquinaTag}
                </span>
                <span className={`${PRIORIDADE_COLORS[os.prioridade]} text-[10px] text-white font-bold px-2 py-0.5 rounded uppercase`}>
                    {os.prioridade}
                </span>
            </div>

            <h4 className="text-white font-semibold mb-1">{os.titulo}</h4>
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                {os.descricao}
            </p>
            <div className="flex justify-between items-center border-t border-gray-300/20 pt-3">
                <span className="text-[10px] text-gray-300 font-mono">
                    Aberto em: {os.dataAbertura}
                </span>
                <button className="text-sky-400 text-xs hover:underline">
                    Assumir OS
                </button>
            </div>
        </div>
    );  
}

export default OSCard;