import { Link } from "react-router-dom";

function CurriculumVitae() {
    return (
        <section id="banner">
            <div className="content">
                <header>
                    <h1>Hi, I’m 정훈</h1>
                    <p>This is my first React & Vite Proejct.</p>
                </header>
                <p>
                    안녕하세요.
                    웹 개발 17년 차 정훈입니다.
                    저는 주로 <u style={{ color: "#f56a6a" }}>.NET MVC & MS-SQL</u>을 기반으로 웹 개발 활동을 하였습니다.<br /><br />
                    현재는 String Boot & React를 기반으로 웹 개발 역량을 확장 중이며
                    이 사이트는 저의 첫번째 <u style={{ color: "#f56a6a" }}>String Boot & React</u> 프로젝트입니다.
                </p>
                <ul className="actions fit">
                    <li><Link to={`${import.meta.env.BASE_URL}career`} className="button primary large fit icon solid fa-search">이력서 열람하기</Link></li>
                </ul>
            </div>
            <span className="image object">
                <img src={`${import.meta.env.BASE_URL}images/Group-7.svg`} style={{marginTop: "-15px"}} />
            </span>
        </section>
    );
}

export default CurriculumVitae