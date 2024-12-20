import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/React-Project1' element={<Home/>} ></Route>
       <Route path='https://jangjeonghun1004.github.io/React-Project1/' element={<Home/>} ></Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
