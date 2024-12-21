import { Link } from "react-router-dom";

function Banner() {
    return (
        <section id="banner">
            <div className="content">
                <header>
                    <h1>Hi, I’m 장정훈</h1>
                    <p>This is my first Vite & React Proejct.</p>
                </header>
                <p>
                    안녕하세요.<br/>
                    웹 개발 경력은 17년 차 이며<br/> 
                    주로 ASP.NET MVC & MS-SQL을 기반으로 웹 개발 활동을 하였습니다.<br/><br/>
                    현재는 String Boot & React를 기반으로 웹 개발 역량을 확장 중이며<br/>
                    이 사이트가 저의 첫번째 String Boot & React 포트폴리오입니다.
                </p>
                <ul className="actions">
                    <li><Link to='/career'className="button big">Learn More</Link></li>
                </ul>
            </div>
            <span className="image object">
                <img src="/images/rvt.webp" alt="" />
            </span>
        </section>

    );
}

export default Banner