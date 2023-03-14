import CodeEditor from '@uiw/react-textarea-code-editor'
import { useState, useEffect } from 'react'
import { useExerciseStore } from '../../stores/Exercise'

const PreviewSolution = () => {
  const solution = useExerciseStore((state) => state.solution)
  const language = useExerciseStore((state) => state.language)
  const generatingSolution = useExerciseStore(
    (state) => state.generatingSolution
  )
  const [SolutionExercise, setSolutionExercise] = useState({
    solution,
    language,
    generatingSolution
  })
  useEffect(() => {
    setSolutionExercise({
      solution,
      language,
      generatingSolution
    })
  }, [solution, language, generatingSolution])

  return (
    <CodeEditor
      className='w-lg min-h-lg max-h-xl'
      value={
        !SolutionExercise.generatingSolution
          ? SolutionExercise.solution
          : 'Generando solucion...'
      }
      language={SolutionExercise.language}
      minHeight={200}
      placeholder={
        SolutionExercise.generatingSolution
          ? 'Generando solucion...'
          : 'Aqui estara tu solucion.'
      }
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: '#f5f5f5',
        fontFamily:
          'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
      }}
    />
  )
}

export default PreviewSolution
