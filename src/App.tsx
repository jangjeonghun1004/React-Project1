import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound404 from './widgets/pageError/NotFound404'
import Career from './pages/Career'
import ScrollToTop from './shared/ScrollToUp'
import UseState from './pages/UseState'
import { ScreenSizeProvider } from './app/ScreenSizeProvider'
import UseRef from './pages/UseRef'
import UseReducer from './pages/UseReducer'

function App() {

  return (
    <ScreenSizeProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* 라우트 변경 시 상단으로 스크롤 */}
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Home />}></Route>
          <Route path={`${import.meta.env.BASE_URL}career`} element={<Career />}></Route>
          <Route path={`${import.meta.env.BASE_URL}useState`} element={<UseState />}></Route>
          <Route path={`${import.meta.env.BASE_URL}useRef`} element={<UseRef />}></Route>
          <Route path={`${import.meta.env.BASE_URL}useReducer`} element={<UseReducer />}></Route>
          <Route path='*' element={<NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </ScreenSizeProvider>
  )
}

export default App
