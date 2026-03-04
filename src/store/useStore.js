import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

export const useMaintenanceStore = create(
  persist( 
    (set) => ({
      maquinas: [
        { 
          id: '1', 
          nome: 'Prensa Hidráulica PH-01', 
          tipo: 'Prensa', 
          status: 'operando', 
          setor: 'Estamparia' 
        },
        { 
          id: '2', 
          nome: 'Torno CNC T-200', 
          tipo: 'Torno', 
          status: 'manutencao', 
          setor: 'Usinagem' 
        }
      ],
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
    }),
    {
      name: 'industrial-storage', 
    }
  )
);