import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  projects: [
    { 
      id: '1', 
      name: 'Meu Primeiro Projeto', 
      tasks: [
        { id: 101, text: 'Configurar Zustand', completed: true },
        { id: 102, text: 'Criar ProjectCard', completed: false }
      ] 
    }
  ],

  addProject: (name) => set((state) => ({
    projects: [
      ...state.projects, 
      { id: crypto.randomUUID(), name, tasks: [] }
    ]
  })),
  
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter(p => p.id !== id)
  })),
}));