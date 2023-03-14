import React from 'react'
import PreviewSolution from '../../components/PreviewSolution'
import PromptExercise from '../../components/PromptExercise'

const Index = () => {
  return (
    <section className='md:flex gap-3 justify-center items-center'>
      <PromptExercise />
      <PreviewSolution />
    </section>
  )
}

export default Index
