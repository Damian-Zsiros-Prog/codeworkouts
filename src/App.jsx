import './App.css'
import Header from './components/Header/index'
import PreviewSolution from './components/PreviewSolution'
import PromptExercise from './components/PromptExercise'

const App = () => {
  return (
    <main className='p-4'>
      <Header />
      <section className='md:flex gap-3 justify-center items-center'>
        <PromptExercise />
        <PreviewSolution />
      </section>
    </main>
  )
}

export default App
