import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ScreenSizeProvider } from "./app/ScreenSizeProvider";

// 페이지 및 위젯 import
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
import ReduxToolKit from "./pages/reactCurriculum/ReduxToolKit";
import UseMemo from "./pages/reactCurriculum/UseMemo";
import Axios from "./pages/reactCurriculum/Axios";
import Lombok from "./pages/springBootCurriculum/Lombok";
import SpringMvc from "./pages/springBootCurriculum/SpringMvc";
import SpringRest from "./pages/springBootCurriculum/SpringRest";
import SpringSecurity from "./pages/springBootCurriculum/SpringSecurity";
import Oauth2Client from "./pages/springBootCurriculum/Oauth2Client";
import SpringSecurityJwt from "./pages/springBootCurriculum/SpringSecurityJwt";
import SpringJpa from "./pages/springBootCurriculum/SpringJpa";
import SpringDataJdbc from "./pages/springBootCurriculum/SpringDataJdbc";
import SpringFrameworkAsync from "./pages/springBootCurriculum/SpringFrameworkAsync";
import ToDoPage from "./pages/ToDoPage";
import Ubuntu from "./pages/amazonEC2/Ubuntu";
import Nginx from "./pages/amazonEC2/Nginx";
import Certbot from "./pages/amazonEC2/Certbot";
import Docker from "./pages/docker/Docker";
import DockerImage from "./pages/docker/DockerImage";
import DockerContainer from "./pages/docker/DockerContainer";
import DockerCompose from "./pages/docker/DockerCompose";
import GitHub from "./pages/github/GitHub";
import GitHubActions from "./pages/github/GitHubActions";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import {ProtectedRoute} from "./app/ProtectedRoute";
import PostPage from "./pages/PostPage";

const basePath = import.meta.env.BASE_URL;

// 상위 레이아웃 컴포넌트: 모든 페이지에서 ScrollRestoration 적용
const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: basePath,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "career", element: <Career /> },
      { path: "useState", element: <UseState /> },
      { path: "useRef", element: <UseRef /> },
      { path: "useReducer", element: <UseReducer /> },
      { path: "useContext", element: <UseContext /> },
      { path: "props", element: <Props /> },
      { path: "useEffect", element: <UseEffect /> },
      { path: "browserRouter", element: <BrowserRoute /> },
      { path: "reduxToolkit", element: <ReduxToolKit /> },
      { path: "useMemo", element: <UseMemo /> },
      { path: "axios", element: <Axios /> },
      { path: "lombok", element: <Lombok /> },
      { path: "springMvc", element: <SpringMvc /> },
      { path: "springRest", element: <SpringRest /> },
      { path: "springSecurity", element: <SpringSecurity /> },
      { path: "oauth2Client", element: <Oauth2Client /> },
      { path: "springSecurityJwt", element: <SpringSecurityJwt /> },
      { path: "springJpa", element: <SpringJpa /> },
      { path: "springDataJdbc", element: <SpringDataJdbc /> },
      { path: "springFrameworkAsync", element: <SpringFrameworkAsync /> },
      { path: "ubuntu", element: <Ubuntu /> },
      { path: "nginx", element: <Nginx /> },
      { path: "certbot", element: <Certbot /> },
      { path: "docker", element: <Docker /> },
      { path: "dockerImage", element: <DockerImage /> },
      { path: "dockerContainer", element: <DockerContainer /> },
      { path: "dockerCompose", element: <DockerCompose /> },
      { path: "gitHub", element: <GitHub /> },
      { path: "gitHubActions", element: <GitHubActions /> },
      { path: "signUp", element: <SignUpPage /> },
      { path: "signIn", element: <SignInPage /> },
      { path: "post", element: <PostPage />},
      {// 보호가 필요한 페이지
        path: "toDo",
        element: (
          <ProtectedRoute>
            <ToDoPage />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound404 /> }, // 존재하지 않는 경로 처리
      // /dashboard 하위에 있는 모든 페이지를 보호하려면 다음과 같이 할 수 있습니다.
      // {
      //   path: "dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <Outlet />
      //     </ProtectedRoute>
      //   ),
      //   children: [
      //     { index: true, element: <DashboardHome /> },
      //     { path: "profile", element: <UserProfile /> },
      //     // ... 기타 보호된 페이지들
      //   ],
      // },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ScreenSizeProvider>
        <RouterProvider router={router} />
      </ScreenSizeProvider>
    </Provider>
  );
}

export default App;
