import { create } from 'zustand';

export const useMaintenanceStore = create((set) => ({
  maquinas: [],
  ordensServico: [],
  
  addMaquina: (maquina) => set((state) => ({
    maquinas: [...state.maquinas, { 
      id: crypto.randomUUID(), 
      ...maquina 
    }]
  })),
  
  deleteMaquina: (id) => set((state) => ({
    maquinas: state.maquinas.filter(m => m.id !== id)
  })),

  addOS: (novaOS) => set((state) => ({
    ordensServico: [...state.ordensServico, { 
      id: crypto.randomUUID(), 
      dataAbertura: new Date().toLocaleDateString('pt-BR'),
      ...novaOS 
    }]
  })),
}));