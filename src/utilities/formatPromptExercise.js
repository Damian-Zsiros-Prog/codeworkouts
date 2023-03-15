export const formatPromptExercise = ({ language, prompt }) => {
  const promptFormatted = `Dame exactamente solo el codigo de la solucion del siguiente ejercicio de programacion en el lenguaje ${language} en base al siguiente texto: ${prompt}`
  return promptFormatted
}
