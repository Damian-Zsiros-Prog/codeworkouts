import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/index'
import Index from './pages/Index'
import PreviewSolutionPage from './pages/PreviewSolutionPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='p-4'>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/preview-solution' element={<PreviewSolutionPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
