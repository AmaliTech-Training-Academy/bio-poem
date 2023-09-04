import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { CreatePoem } from './pages/CreatePoem'
import { useSelector } from 'react-redux'

function App() {
  const toggle = useSelector((state)=> state.darkMode.toggle)


  return (
    <div className={`${toggle ? 'bg-black text-[#fff]': ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/create' element={<CreatePoem/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
