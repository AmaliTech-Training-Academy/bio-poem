import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { CreatePoem } from './pages/CreatePoem'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/create' element={<CreatePoem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
