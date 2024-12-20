import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound404 from './widgets/pageError/NotFound404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path={process.env.NODE_ENV === 'production' ? '/React-Project1' : '/'} element={<Home/>}></Route>
       <Route path='*' element={<NotFound404/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
