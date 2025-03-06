import { Link } from "react-router-dom";

function GetInTouch() {
    return (
        <section>
            <header className="major">
                <h2>Get in touch</h2>
            </header>
            <p>
                웹 개발 17년 차 정훈입니다. 저는 주로 <a href="#">.NET MVC & MS-SQL</a>을 기반으로 웹 개발 활동을 하였습니다.
                현재는 String Boot & React를 기반으로 웹 개발 역량을 확장 중이며 이 사이트는 저의 첫번째 <a href="#">String Boot & React</a> 프로젝트입니다.
            </p>
            <ul className="contact">
                <li className="icon solid fa-coffee"><Link to={`${import.meta.env.BASE_URL}career`}>이력서 연람</Link></li>
                <li className="icon solid fa-envelope"><a href="#">jangjeonghun1004@gmail.com</a></li>
            </ul>
        </section>
    );
}

export default GetInTouch