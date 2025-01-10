import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound404 from './widgets/pageError/NotFound404'
import Career from './pages/Career'
import ScrollToTop from './shared/ScrollToUp'
import UseState from './pages/reactCurriculum/UseState'
import { ScreenSizeProvider } from './app/ScreenSizeProvider'
import UseRef from './pages/reactCurriculum/UseRef'
import UseReducer from './pages/reactCurriculum/UseReducer'
import UseContext from './pages/reactCurriculum/UseContext'
import Props from './pages/reactCurriculum/Props'
import UseEffect from './pages/reactCurriculum/UseEffect'
import BrowserRoute from './pages/reactCurriculum/BrowserRoute'
import Recoil from './pages/reactCurriculum/Recoil'
import UseMemo from './pages/reactCurriculum/UseMemo'
import Lombok from './pages/springBootCurriculum/Lombok'
import SpringMvc from './pages/springBootCurriculum/SpringMvc'
import SpringRest from './pages/springBootCurriculum/SpringRest'
import SpringSecurity from './pages/springBootCurriculum/SpringSecurity'
import Oauth2Client from './pages/springBootCurriculum/Oauth2Client'
import SpringSecurityJwt from './pages/springBootCurriculum/SpringSecurityJwt'
import SpringJpa from './pages/springBootCurriculum/SpringJpa'
import SpringDataJdbc from './pages/springBootCurriculum/SpringDataJdbc'
import SpringFrameworkAsync from './pages/springBootCurriculum/SpringFrameworkAsync'
import ToDo from './pages/ToDo'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <ScreenSizeProvider>
        <BrowserRouter>
          <ScrollToTop /> {/* 라우트 변경 시 상단으로 스크롤 */}
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Home />}></Route>
            <Route path={`${import.meta.env.BASE_URL}career`} element={<Career />}></Route>
            <Route path={`${import.meta.env.BASE_URL}useState`} element={<UseState />}></Route>
            <Route path={`${import.meta.env.BASE_URL}useRef`} element={<UseRef />}></Route>
            <Route path={`${import.meta.env.BASE_URL}useReducer`} element={<UseReducer />}></Route>
            <Route path={`${import.meta.env.BASE_URL}useContext`} element={<UseContext />}></Route>
            <Route path={`${import.meta.env.BASE_URL}props`} element={<Props />}></Route>
            <Route path={`${import.meta.env.BASE_URL}useEffect`} element={<UseEffect />}></Route>
            <Route path={`${import.meta.env.BASE_URL}browserRouter`} element={<BrowserRoute />}></Route>
            <Route path={`${import.meta.env.BASE_URL}recoil`} element={<Recoil />}></Route>
            <Route path={`${import.meta.env.BASE_URL}useMemo`} element={<UseMemo />}></Route>
            <Route path={`${import.meta.env.BASE_URL}lombok`} element={<Lombok />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springMvc`} element={<SpringMvc />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springRest`} element={<SpringRest />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springSecurity`} element={<SpringSecurity />}></Route>
            <Route path={`${import.meta.env.BASE_URL}oauth2Client`} element={<Oauth2Client />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springSecurityJwt`} element={<SpringSecurityJwt />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springJpa`} element={<SpringJpa />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springDataJdbc`} element={<SpringDataJdbc />}></Route>
            <Route path={`${import.meta.env.BASE_URL}springFrameworkAsync`} element={<SpringFrameworkAsync />}></Route>
            <Route path={`${import.meta.env.BASE_URL}toDo`} element={<ToDo />} />
            <Route path='*' element={<NotFound404 />}></Route>
          </Routes>
        </BrowserRouter>
      </ScreenSizeProvider>
    </RecoilRoot>
    
  )
}

export default App
