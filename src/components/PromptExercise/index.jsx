import { useState } from 'react'
import { config } from '../../config'
import { resolveExercise } from '../../services/resolveExercise'
import { useExerciseStore } from '../../stores/Exercise'

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

    setExercise({
      ...Exercise,
      generatingState: true
    })
    updatePrompt(Exercise.prompt)
    updateLanguage(Exercise.language)
    updateStateGenerating(Exercise.generatingState)
    const { response } = await resolveExercise({
      prompt: Exercise.prompt,
      language: Exercise.language
    })
    setExercise({
      ...Exercise,
      solution: response,
      generatingState: false
    })
    updateSolution(Exercise.solution)
    updateStateGenerating(Exercise.generatingState)
  }
  return (
    <form method='POST' className='flex flex-col gap-3 p-4' onSubmit={onSubmit}>
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
      >
        {config.languages.map((language) => (
          <option key={language.slug} value={language.slug}>
            {language.name}
          </option>
        ))}
      </select>
      <button className='p-2 bg-blue-600 rounded-full text-white'>
        Generar solucion del ejercicio
      </button>
    </form>
  )
}

export default PromptExercise
