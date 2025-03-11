import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

function Menu() {
    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li>
                    <Link to={`${import.meta.env.BASE_URL}`} className="icon solid fa-home">&nbsp;<p style={{ display: "inline" }}>홈</p></Link>
                </li>
                <li>
                    <Link to={`${import.meta.env.BASE_URL}signIn`} className="icon solid fa-key">&nbsp;<p style={{ display: "inline" }}>로그인</p></Link>
                </li>
                <li>
                    <Link to={`${import.meta.env.BASE_URL}toDo`} className="icon solid fa-list">&nbsp;<p style={{ display: "inline" }}>ToDo-할 일</p></Link>
                </li>
                <li>
                    <Link to={`${import.meta.env.BASE_URL}post`} className="icon solid fa-pen">&nbsp;<p style={{ display: "inline" }}>자유 게시판</p></Link>
                </li>
                <SubMenu title="React-리액트" icon="fa-code">
                    <li><Link to={`${import.meta.env.BASE_URL}reactMap`}>React-학습 로드 맵</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}useState`}>useState</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}useReducer`}>useReducer</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}useRef`}>useRef</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}useMemo`}>useMemo</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}props`}>props</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}useEffect`}>useEffect</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}useContext`}>useContext</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}axios`}>axios-액시오스</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}browserRouter`}>Browser Router-브라우저 라우터</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}reduxToolkit`}>Redux ToolKit-리덕스 툴킷</Link></li>
                </SubMenu>
                <SubMenu title="Spring Boot-스프링 부트" icon="fa-code">
                    <li><Link to={`${import.meta.env.BASE_URL}springBootMap`}>Spring Boot-학습 로드 맵</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springMvc`}>Spring MVC</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springRest`}>Spring RESTful</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springSecurity`}>Spring Security</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springSecurityJwt`}>JWT(Json Web Token)</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}oauth2Client`}>OAuth2 Client</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springJpa`}>Spring JPA</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springDataJdbc`}>Spring Data JDBC</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}springFrameworkAsync`}>Spring Framework ASYNC</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}lombok`}>Lombok</Link></li>
                </SubMenu>
                <SubMenu title="Deploying-배포" icon="fa-code">
                    <li><Link to={`${import.meta.env.BASE_URL}deployingMap`}>Deploying-학습 로드 맵</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}ubuntu`}>Ubuntu Server</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}nginx`}>Nginx</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}mysql`}>My-Sql</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}certbot`}>Certbot</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}dockerContainer`}>Docker Container</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}dockerImage`}>Docker Image</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}dockerCompose`}>Docker Compose</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}gitHub`}>Github</Link></li>
                    <li><Link to={`${import.meta.env.BASE_URL}gitHubActions`}>GithubActions</Link></li>
                </SubMenu>
                {/* <SubMenu title="LLM-AI" icon="fa-robot">
                    <li><a href='https://chatgpt.com/' target="blank">ChatGPT</a></li>
                    <li><a href='https://grok.com/' target="blank">Grok</a></li>
                    <li><a href='https://claude.ai/' target="blank">Claude</a></li>
                    <li><a href='https://gemini.google.com/' target="blank">Gemini</a></li>
                </SubMenu> */}
            </ul>
        </nav>
    );
}

export default Menu