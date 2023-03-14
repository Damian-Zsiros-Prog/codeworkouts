import CodeEditor from '@uiw/react-textarea-code-editor'
import { useExerciseStore } from '../../stores/Exercise'

const PreviewSolution = () => {
  const solution = useExerciseStore((state) => state.solution)
  const language = useExerciseStore((state) => state.language)
  const generatingSolution = useExerciseStore(
    (state) => state.generatingSolution
  )
  return (
    <CodeEditor
      className='w-lg min-h-lg max-h-xl'
      value={solution}
      language={language}
      minHeight={200}
      placeholder={
        generatingSolution
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
