import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path={process.env.NODE_ENV === 'production' ? '/React-Project1' : '/'} element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
