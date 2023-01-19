import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'
import Home from './pages/home'
import Projects from './pages/projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
