import { useState } from 'react'
import { useExerciseStore } from '../../stores/Exercise'

const PreviewSolution = () => {
  const solution = useExerciseStore((state) => state.solution)
  return (
    <>
      <p className='bg-gray-500 max-w-md'>{solution}</p>
    </>
  )
}

export default PreviewSolution
