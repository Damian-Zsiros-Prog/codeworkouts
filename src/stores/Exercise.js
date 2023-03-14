import create from 'zustand'

export const useExerciseStore = create((set) => ({
  prompt: '',
  language: 'javascript',
  solution: '',
  generatingSolution: false,
  updatePrompt: (newPrompt) => set((state) => ({ prompt: newPrompt })),
  updateLanguage: (newLanguage) => set((state) => ({ language: newLanguage })),
  updateStateGenerating: (newState) =>
    set((state) => ({ generatingSolution: newState })),
  updateSolution: (newSolution) => set((state) => ({ solution: newSolution }))
}))
