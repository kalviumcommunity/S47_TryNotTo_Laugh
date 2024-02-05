import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
