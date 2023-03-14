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
      className='md:w-full'
      value={
        !SolutionExercise.generatingSolution
          ? SolutionExercise.solution
          : 'Generando solucion...'
      }
      language={SolutionExercise.language}
      minHeight={200}
      padding={15}
      disabled={SolutionExercise.generatingSolution}
      style={{
        fontSize: 12,
        backgroundColor: '#f5f5f5',
        fontFamily:
          'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        minWidth: 500,
        maxWidth: 750,
        maxHeight: 350,
        overflow: 'scroll'
      }}
    />
  )
}

export default PreviewSolution
