import TimeLine from "../shared/timeLine/TimeLine";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";

const timeLineData = [
    { id: 1, title: "현재", subTitle: '개발 역량 강화', details: [{ id: 1, text: 'Spring Boot' }, { id: 2, text: 'React + Vite + TS' }] },
    { id: 2, title: "2020 ~ 2024", subTitle: '큐익스프레스', details: [{ id: 1, text: '입출고 시스템' }, { id: 2, text: '셀러 관리 시스템' }] }
];

function Career() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>이력서</h1>
                        </header>

                        <span className="image main"><img src="/images/img03.jpeg" style={{ height: 300 }} alt="진화" /></span>
                        <TimeLine data={timeLineData} />
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Career;