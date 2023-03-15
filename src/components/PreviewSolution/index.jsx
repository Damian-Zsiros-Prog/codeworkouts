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
      className='lg:min-h-[350px] lg:max-w-[600px] max-h-[350px] lg:min-w-[550px] md:min-w-[550px] sm:min-w-[200px]'
      value={
        !SolutionExercise.generatingSolution
          ? SolutionExercise.solution
          : 'Generando solucion...'
      }
      language={SolutionExercise.language}
      padding={15}
      disabled={
        SolutionExercise.generatingSolution || SolutionExercise.solution === ''
      }
      style={{
        fontSize: 12,
        backgroundColor: '#f5f5f5',
        fontFamily:
          'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        overflow: 'scroll'
      }}
    />
  )
}

export default PreviewSolution
