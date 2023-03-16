import { useState } from 'react'
import { config } from '../../config'
import { resolveExercise } from '../../services/resolveExercise'
import { useExerciseStore } from '../../stores/Exercise'
import { Link } from 'react-router-dom'
const PromptExercise = () => {
  const [Exercise, setExercise] = useState({
    prompt: '',
    language: 'javascript',
    generatingState: false,
    solution: ''
  })
  const updatePrompt = useExerciseStore((state) => state.updatePrompt)
  const updateLanguage = useExerciseStore((state) => state.updateLanguage)
  const updateStateGenerating = useExerciseStore(
    (state) => state.updateStateGenerating
  )
  const updateSolution = useExerciseStore((state) => state.updateSolution)
  useExerciseStore((state) => state)
  const onChange = (e) => {
    e.preventDefault()
    setExercise({
      ...Exercise,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    updateSolution('')
    setExercise({
      ...Exercise,
      solution: ''
    })
    updatePrompt(Exercise.prompt)
    updateStateGenerating(true)
    setExercise({
      ...Exercise,
      generatingState: true
    })
    const { response, error } = await resolveExercise({
      prompt: Exercise.prompt,
      language: Exercise.language
    })
    const solutionMessage =
      error && error.code !== ''
        ? `Error al solucionar su ejercicio: ${error.message}`
        : response
    console.log({
      response,
      error
    })
    updateSolution(solutionMessage)
    updateStateGenerating(error && error.code)
    updateLanguage(error && error.code !== '' ? 'plaintext' : Exercise.language)
    setExercise({
      ...Exercise,
      generatingState: false,
      solution: solutionMessage
    })
  }
  return (
    <section className=''>
      <form
        method='POST'
        className='flex flex-col gap-3 p-4'
        onSubmit={onSubmit}
      >
        <textarea
          name='prompt'
          rows={10}
          cols={50}
          onChange={onChange}
          className='border border-gray-500 rounded-xl p-2 outline-none'
        />
        <select
          className='border border-gray-600 p-2 rounded-full'
          name='language'
          onChange={onChange}
          disabled={Exercise.generatingState}
        >
          {config.languages.map((language) => (
            <option key={language.slug} value={language.slug}>
              {language.name}
            </option>
          ))}
        </select>
        <button
          className='p-2 bg-blue-600 rounded-full text-white transition hover:bg-blue-700'
          disabled={Exercise.generatingState}
        >
          Generar solucion del ejercicio
        </button>
        {!Exercise.generatingState &&
          !Exercise.solution.includes('Error al solucionar su ejercicio:') && (
            <Link
              className="text-center p-2 className='p-2 bg-blue-600 rounded-full text-white transition hover:bg-blue-700'"
              to='/preview-solution'
            >
              Mostrar solucion en grande
            </Link>
          )}
      </form>
    </section>
  )
}

export default PromptExercise
