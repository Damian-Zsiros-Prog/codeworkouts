import React from 'react'
import PreviewSolution from '../../components/PreviewSolution'

const PreviewSolutionPage = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-bold my-3'>Solucion del ejercicio</h1>
      <PreviewSolution />
    </section>
  )
}

export default PreviewSolutionPage
