import create from 'zustand'

export const useExerciseStore = create((set) => ({
  prompt: '',
  language: 'javascript',
  solution: '',
  generatingSolution: false,
  updatePrompt: (newPrompt) =>
    set((state) => ({ ...state, prompt: newPrompt })),
  updateLanguage: (newLanguage) =>
    set((state) => ({ ...state, language: newLanguage })),
  updateStateGenerating: (newState) =>
    set((state) => ({ ...state, generatingSolution: newState })),
  updateSolution: (newSolution) =>
    set((state) => ({ ...state, solution: newSolution }))
}))
