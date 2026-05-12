import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import MadhuResume from './pages/MadhuResume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/madhu-resume" element={<MadhuResume />} />
    </Routes>
  )
}

export default App
