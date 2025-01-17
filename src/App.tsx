import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ScreenSizeProvider } from "./app/ScreenSizeProvider";

// Import pages
import Home from "./pages/Home";
import NotFound404 from "./widgets/pageError/NotFound404";
import Career from "./pages/Career";
import UseState from "./pages/reactCurriculum/UseState";
import UseRef from "./pages/reactCurriculum/UseRef";
import UseReducer from "./pages/reactCurriculum/UseReducer";
import UseContext from "./pages/reactCurriculum/UseContext";
import Props from "./pages/reactCurriculum/Props";
import UseEffect from "./pages/reactCurriculum/UseEffect";
import BrowserRoute from "./pages/reactCurriculum/BrowserRoute";
import Recoil from "./pages/reactCurriculum/Recoil";
import UseMemo from "./pages/reactCurriculum/UseMemo";
import Lombok from "./pages/springBootCurriculum/Lombok";
import SpringMvc from "./pages/springBootCurriculum/SpringMvc";
import SpringRest from "./pages/springBootCurriculum/SpringRest";
import SpringSecurity from "./pages/springBootCurriculum/SpringSecurity";
import Oauth2Client from "./pages/springBootCurriculum/Oauth2Client";
import SpringSecurityJwt from "./pages/springBootCurriculum/SpringSecurityJwt";
import SpringJpa from "./pages/springBootCurriculum/SpringJpa";
import SpringDataJdbc from "./pages/springBootCurriculum/SpringDataJdbc";
import SpringFrameworkAsync from "./pages/springBootCurriculum/SpringFrameworkAsync";
import ToDo from "./pages/ToDo";
import Ubuntu from "./pages/amazonEC2/Ubuntu";

// Create the router
const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}`,
    element: (
      <>
        <Home />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}career`,
    element: (
      <>
        <Career />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}useState`,
    element: (
      <>
        <UseState />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}useRef`,
    element: (
      <>
        <UseRef />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}useReducer`,
    element: (
      <>
        <UseReducer />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}useContext`,
    element: (
      <>
        <UseContext />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}props`,
    element: (
      <>
        <Props />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}useEffect`,
    element: (
      <>
        <UseEffect />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}browserRouter`,
    element: (
      <>
        <BrowserRoute />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}recoil`,
    element: (
      <>
        <Recoil />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}useMemo`,
    element: (
      <>
        <UseMemo />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}lombok`,
    element: (
      <>
        <Lombok />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springMvc`,
    element: (
      <>
        <SpringMvc />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springRest`,
    element: (
      <>
        <SpringRest />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springSecurity`,
    element: (
      <>
        <SpringSecurity />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}oauth2Client`,
    element: (
      <>
        <Oauth2Client />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springSecurityJwt`,
    element: (
      <>
        <SpringSecurityJwt />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springJpa`,
    element: (
      <>
        <SpringJpa />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springDataJdbc`,
    element: (
      <>
        <SpringDataJdbc />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}springFrameworkAsync`,
    element: (
      <>
        <SpringFrameworkAsync />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}toDo`,
    element: (
      <>
        <ToDo />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: `${import.meta.env.BASE_URL}ubuntu`,
    element: (
      <>
        <Ubuntu />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <NotFound404 />
        <ScrollRestoration />
      </>
    ),
  },
]);

function App() {
  return (
    <RecoilRoot>
      <ScreenSizeProvider>
        <RouterProvider router={router} />
      </ScreenSizeProvider>
    </RecoilRoot>
  );
}

export default App;
