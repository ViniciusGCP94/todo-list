import { create } from 'zustand';

export const useMaintenanceStore = create((set) => ({
  maquinas: [],
  
  addMaquina: (maquina) => set((state) => ({
    maquinas: [...state.maquinas, { 
      id: crypto.randomUUID(), 
      ...maquina 
    }]
  })),
  
  deleteMaquina: (id) => set((state) => ({
    maquinas: state.maquinas.filter(m => m.id !== id)
  }))
}));

//Pivotando para o Sistema de Manutenção de Máquinas, onde cada máquina tem um nome, descrição e data de manutenção. O código acima define a estrutura do estado para armazenar as máquinas e as funções para adicionar e deletar máquinas.