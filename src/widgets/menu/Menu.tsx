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
                    <Link to={'/'} className="icon solid fa-home">&nbsp;<p style={{ display: "inline" }}>홈</p></Link>
                </li>
                <li>
                    <Link to={'/career'} className="icon solid fa-coffee">&nbsp;<p style={{ display: "inline" }}>이력서 연람</p></Link>
                </li>
                <SubMenu title="React-리액트" icon="fa-code">
                    <li><Link to={'/useState'}>useState</Link></li>
                    <li><Link to={'/useReducer'}>useReducer</Link></li>
                    <li><Link to={'/useRef'}>useRef</Link></li>
                    <li><Link to={'/useMemo'}>useMemo</Link></li>
                    <li><Link to={'/props'}>props</Link></li>
                    <li><Link to={'/useEffect'}>useEffect</Link></li>
                    <li><Link to={'/useContext'}>useContext</Link></li>
                    <li><Link to={'/axios'}>axios-액시오스</Link></li>
                    <li><Link to={'/browserRouter'}>Browser Router-브라우저 라우터</Link></li>
                    <li><Link to={'/reduxToolkit'}>Redux ToolKit-리덕스 툴킷</Link></li>
                </SubMenu>
                <SubMenu title="Spring Boot-스프링 부트" icon="fa-code">
                    <li><Link to={'/useState'}>useState</Link></li>
                    <li><Link to={'/useReducer'}>useReducer</Link></li>
                    <li><Link to={'/useRef'}>useRef</Link></li>
                    <li><Link to={'/useMemo'}>useMemo</Link></li>
                    <li><Link to={'/props'}>props</Link></li>
                    <li><Link to={'/useEffect'}>useEffect</Link></li>
                    <li><Link to={'/useContext'}>useContext</Link></li>
                    <li><Link to={'/axios'}>axios-액시오스</Link></li>
                    <li><Link to={'/browserRouter'}>Browser Router-브라우저 라우터</Link></li>
                    <li><Link to={'/reduxToolkit'}>Redux ToolKit-리덕스 툴킷</Link></li>
                </SubMenu>
                <SubMenu title="Deploying-배포" icon="fa-code">
                    <li><Link to={'/useState'}>useState</Link></li>
                    <li><Link to={'/useReducer'}>useReducer</Link></li>
                    <li><Link to={'/useRef'}>useRef</Link></li>
                    <li><Link to={'/useMemo'}>useMemo</Link></li>
                    <li><Link to={'/props'}>props</Link></li>
                    <li><Link to={'/useEffect'}>useEffect</Link></li>
                    <li><Link to={'/useContext'}>useContext</Link></li>
                    <li><Link to={'/axios'}>axios-액시오스</Link></li>
                    <li><Link to={'/browserRouter'}>Browser Router-브라우저 라우터</Link></li>
                    <li><Link to={'/reduxToolkit'}>Redux ToolKit-리덕스 툴킷</Link></li>
                </SubMenu>
                <li>
                    <Link to={'/toDo'} className="icon solid fa-list">&nbsp;<p style={{ display: "inline" }}>ToDo-할 일</p></Link>
                </li>

                <li>
                    <Link to={'/post'} className="icon solid fa-pen">&nbsp;<p style={{ display: "inline" }}>자유 게시판</p></Link>
                </li>
                <li>
                    <Link to={'/signIn'} className="icon solid fa-key">&nbsp;<p style={{ display: "inline" }}>회원 인증</p></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu