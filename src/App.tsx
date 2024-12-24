import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound404 from './widgets/pageError/NotFound404'
import Career from './pages/Career'
import ScrollToTop from './shared/ScrollToUp'
import UseState from './pages/UseState'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 라우트 변경 시 상단으로 스크롤 */}
      <Routes>
       <Route path={process.env.NODE_ENV === 'production' ? '/React-Project1' : '/'} element={<Home/>}></Route>
       <Route path={process.env.NODE_ENV === 'production' ? '/React-Project1/career' : '/career'} element={<Career/>}></Route>
       <Route path={`${import.meta.env.BASE_URL}useState`} element={<UseState/>}></Route>
       <Route path='*' element={<NotFound404/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
