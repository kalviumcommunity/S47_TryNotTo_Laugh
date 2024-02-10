import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form'
import UpdateMeme from './components/updateMeme'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/update/:id' element={<UpdateMeme/>}></Route>
        <Route path='/loginForm' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
