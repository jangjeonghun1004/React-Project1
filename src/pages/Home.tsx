import CurriculumVitae from "../widgets/curriculumVitae/CurriculumVitae";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import CardStyle3 from "../shared/card/CardStyle3";
import CardStyle2 from "../shared/card/CardStyle2";
import ScrollAnimation from "../widgets/scrollAnimation/ScrollAnimation";

function Home() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <CurriculumVitae />

                    <ScrollAnimation alwaysVisible>
                        <section>
                            <header className="major">
                                <h2>React 학습 내역</h2>
                            </header>
                            <div className="features">
                                <CardStyle3
                                    icon="icon fa-gem"
                                    title="useState"
                                    text="useState는 React에서 함수형 컴포넌트의 상태 관리를 간단하고 직관적으로 처리하기 위한 Hook입니다."
                                    linkPath='useState'
                                />
                                <CardStyle3
                                    icon="icon solid fa-paper-plane"
                                    title="useReducer"
                                    text="useReducer는 React의 상태 관리 훅으로, 복잡한 상태 변경 로직을 관리할 때 유용합니다."
                                    linkPath="useReducer"
                                />
                                <CardStyle3
                                    icon="icon solid fa-ghost"
                                    title="useRef"
                                    text="useRef는 DOM 조작이나 값 저장에 유용하며, 렌더링을 발생시키지 않고 값을 유지할 때 자주 사용됩니다."
                                    linkPath="useRef"
                                />
                                <CardStyle3
                                    icon="icon solid fa-rocket"
                                    title="Props"
                                    text="Props는 React에서 속성(properties)의 약자로, 컴포넌트 간에 데이터를 전달하는 데 사용됩니다."
                                    linkPath="props"
                                />
                                <CardStyle3
                                    icon="icon solid fa-smile-wink"
                                    title="useContext"
                                    text="useContext는 React에서 **컨텍스트(Context)**를 사용하기 위해 제공되는 훅(Hook)입니다."
                                    linkPath="useContext"
                                />
                                <CardStyle3
                                    icon="icon solid fa-sink"
                                    title="useEffect"
                                    text="useEffect는 React의 Hook으로, 컴포넌트가 렌더링된 후에 실행되어 부수효과(side effects)를 처리합니다."
                                    linkPath="useEffect"
                                />
                                <CardStyle3
                                    icon="icon solid fa-skating"
                                    title="BrowserRouter"
                                    text="BrowserRouter는 React Router에서 제공하는 컴포넌트로, HTML5의 History API를 활용하여 클라이언트 측 라우팅을 처리합니다."
                                    linkPath="browserRouter"
                                />
                                <CardStyle3
                                    icon="icon solid fa-signal"
                                    title="Redux ToolKit"
                                    text="Redux Toolkit은 Redux를 사용하여 상태 관리를 효율적으로 처리하기 위한 라이브러리입니다."
                                    linkPath="reduxToolKit"
                                />
                                <CardStyle3
                                    icon="icon solid fa-gavel"
                                    title="Optimization"
                                    text="React의 useMemo는 컴포넌트의 렌더링 성능을 최적화하기 위해 사용되는 훅입니다."
                                    linkPath="useMemo"
                                />
                                <CardStyle3
                                    icon="icon solid fa-lock"
                                    title="Axios"
                                    text="axios는 JavaScript 기반의 HTTP 클라이언트 라이브러리로, 프론트엔드/백엔드 환경에서 API 통신을 간편하게 처리하는 도구입니다."
                                    linkPath="axios"
                                />
                            </div>
                        </section>
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <section>
                            <header className="major">
                                <h2>Spring Boot 학습 내역</h2>
                            </header>
                            <dl>
                                <dt>DEVELOPER TOOLS</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-paper-plane"
                                            title="Lombok"
                                            text="Lombok은 Java에서 반복적인 코드 작성을 줄이고 생산성을 높이는 라이브러리입니다."
                                            linkPath="lombok"
                                        />
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>WEB</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon fa-gem"
                                            title="Spring MVC"
                                            text="Spring MVC는 Spring Framework의 웹 애플리케이션 개발을 위한 핵심 구성 요소 중 하나"
                                            linkPath="springMvc"
                                        />
                                        <CardStyle3
                                            icon="icon icon solid fa-gavel"
                                            title="Spring REST"
                                            text="Spring REST는 Spring Framework에서 제공하는 RESTful 웹 서비스를 개발하기 위한 강력한 도구입니다."
                                            linkPath="springRest"
                                        />
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>SECURITY</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-rocket"
                                            title="Spring Security"
                                            text="Spring Security는 애플리케이션의 인증(Authentication)과 권한 부여(Authorization)를 관리하는 강력한 프레임워크입니다."
                                            linkPath="springSecurity"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-lock"
                                            title="OAuth2 Client"
                                            text="OAuth2 Client는 OAuth 2.0 프로토콜을 사용하여 외부 인증 및 권한 부여 서버와 상호작용하는 역할을 합니다."
                                            linkPath="oauth2Client"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-sign-out-alt"
                                            title="Spring Security JWT"
                                            text="Spring Security JWT는 JSON Web Token(JWT)을 활용한 인증 및 권한 부여를 처리하는 데 사용됩니다."
                                            linkPath="springSecurityJwt"
                                        />
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>SQL</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-paper-plane"
                                            title="Spring JPA"
                                            text="Spring Data JPA는 JPA(Java Persistence API)를 기반으로 데이터베이스와의 상호작용을 간소화하기 위해 제공되는 Spring 프로젝트입니다."
                                            linkPath="springJpa"
                                        />
                                        <CardStyle3
                                            icon="icon fa-gem"
                                            title="Spring Data JDBC"
                                            text="Spring Data JDBC는 간단하고 가볍게 데이터 액세스 계층을 개발할 수 있도록 지원하는 Spring Data 프로젝트의 한 부분입니다."
                                            linkPath="springDataJdbc"
                                        />
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>ETC</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-signal"
                                            title="SpringFramework ASYNC"
                                            text="Callable<T> 인터페이스, DeferedResult<T> 클래스, CompletableFuture<T> 클래스"
                                            linkPath="springframeworkAsync"
                                        />
                                    </div>
                                </dd>
                            </dl>
                        </section>
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <section>
                            <header className="major">
                                <h2>Deploying 학습 내역</h2>
                            </header>
                            <dl>
                                <dt>Amazon EC2</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-sink"
                                            title="Ubuntu Server"
                                            text="Ubuntu Server는 Linux 기반 운영 체제로, 서버 환경에 최적화된 버전입니다."
                                            linkPath="ubuntu"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-ghost"
                                            title="Nginx"
                                            text="Nginx는 효율적이고 강력한 웹 서버 및 리버스 프록시 도구입니다."
                                            linkPath="nginx"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-lock"
                                            title="Certbot"
                                            text="Let's Encrypt 인증서를 자동으로 발급 및 갱신하여 웹 서버에 HTTPS를 설정할 수 있게 도와줍니다. "
                                            linkPath="certbot"
                                        />
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>Docker</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-rocket"
                                            title="Docker"
                                            text="Docker는 애플리케이션을 컨테이너라는 단위로 패키징, 배포, 실행하는 플랫폼입니다."
                                            linkPath="docker"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-paper-plane"
                                            title="Docker Image"
                                            text="Container(컨테이너)를 실행하기 위한 읽기 전용 템플릿입니다."
                                            linkPath="dockerImage"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-ghost"
                                            title="Docker Container"
                                            text="Docker Image(이미지)를 실행하여 생성된 가상 환경입니다."
                                            linkPath="dockerContainer"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-gavel"
                                            title="Docker Compose"
                                            text="여러 Container(컨테이너)를 정의하고 관리하기 위한 도구입니다."
                                            linkPath="dockerCompose"
                                        />
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>Github</dt>
                                <dd>
                                    <div className="features">
                                        <CardStyle3
                                            icon="icon solid fa-sink"
                                            title="GitHub"
                                            text="GitHub는 소프트웨어 개발 프로젝트를 관리하고 협업할 수 있는 플랫폼으로, 주로 Git 버전 관리 시스템을 기반으로 작동합니다."
                                            linkPath="gitHub"
                                        />
                                        <CardStyle3
                                            icon="icon solid fa-rocket"
                                            title="GitHub Actions"
                                            text="GitHub Actions는 GitHub 저장소에서 CI/CD(Continuous Integration/Continuous Deployment) 워크플로를 자동화할 수 있는 도구입니다."
                                            linkPath="gitHubActions"
                                        />
                                    </div>
                                </dd>
                            </dl>
                        </section>
                    </ScrollAnimation>
                    
                    <ScrollAnimation>
                        <section>
                            <header className="major">
                                <h2>포트폴리오 주요 기능</h2>
                            </header>
                            <div className="posts">
                                <CardStyle2
                                    image="./images/todo-screenshot.png"
                                    title="TO DO List"
                                    text="사용자가 간단하고 직관적인 방식으로 할 일을 추가, 관리, 수정 및 삭제할 수 있는 React 기반 애플리케이션을 개발했습니다."
                                    linkPath="toDo"
                                />
                                <CardStyle2
                                    image="https://html5up.net/uploads/demos/editorial/images/pic01.jpg"
                                    title="회원 가입"
                                    text="사용자가 간단하고 직관적인 방식으로 할 일을 추가, 관리, 수정 및 삭제할 수 있는 React 기반 애플리케이션을 개발한다."
                                    linkPath="signIn"
                                />
                            </div>
                        </section>
                    </ScrollAnimation>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Home