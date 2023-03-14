import './App.css'
import Header from './components/Header/index'
import PreviewSolution from './components/PreviewSolution'
import PromptExercise from './components/PromptExercise'

const App = () => {
  return (
    <>
      <Header />
      <section className='flex gap-3  justify-center items-center'>
        <PromptExercise />
        <PreviewSolution />
      </section>
    </>
  )
}

export default App
