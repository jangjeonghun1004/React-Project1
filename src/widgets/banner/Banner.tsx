import { Link } from "react-router-dom";

function Banner() {
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
                    저는 주로 .NET MVC & MS-SQL을 기반으로 웹 개발 활동을 하였습니다.<br/><br/>
                    현재는 String Boot & React를 기반으로 웹 개발 역량을 확장 중이며
                    이 사이트가 저의 첫번째 String Boot & React 포트폴리오입니다.
                </p>
                <ul className="actions">
                    <li><Link to={process.env.NODE_ENV === 'production' ? '/React-Project1/career' : '/career'} className="button big">Learn More</Link></li>
                </ul>
            </div>
            <span className="image object">
                <img src={process.env.NODE_ENV === 'production' ? '/React-Project1/images/rvt.png' : '/images/rvt.png'} alt="" />
            </span>
        </section>

    );
}

export default Banner