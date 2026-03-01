// src/constants/statusColors.js

export const STATUS_MAQUINA = {
  // TODO: Defina as chaves (ex: OPERANDO, MANUTENCAO, PARADA)
  // O valor deve ser o texto que aparece para o usuário.
  OPERANDO: "Operando",
  MANUTENCAO: "Manutenção",
  PARADA: "Parada",
};

export const STATUS_COLORS = {
  // TODO: Associe cada chave acima a uma classe do Tailwind
  // Dica: Use cores que façam sentido industrial (bg-green-500, bg-red-600...)
    OPERANDO: "bg-green-500",
    MANUTENCAO: "bg-yellow-500",
    PARADA: "bg-red-500",
};

export const CRITICIDADE = {
  // TODO: Como você classificaria a importância da máquina?
  // Ex: Alta (Para a linha), Média, Baixa.
    ALTA: "Alta",
    MEDIA: "Média",
    BAIXA: "Baixa",
};

export const PRIORIDADE_OS = {
  BAIXA: "Baixa",
  MEDIA: "Média",
  ALTA: "Alta",
  URGENTE: "Urgente" // Parada de linha!
};

export const PRIORIDADE_COLORS = {
  BAIXA: "bg-blue-500",
  MEDIA: "bg-yellow-500",
  ALTA: "bg-orange-500",
  URGENTE: "bg-red-600 animate-pulse" // Efeito visual para o que é crítico
};