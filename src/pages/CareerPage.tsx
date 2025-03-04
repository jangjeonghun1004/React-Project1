import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";

export default function CareerPage() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>✅ 2018. 04 ~ 2024. 08(6년 5개월)</h1>
                        </header>
                        <img src={`${import.meta.env.BASE_URL}images/qexpress1.png`} style={{width: "100%"}} />
                        <img src={`${import.meta.env.BASE_URL}images/qexpress2.png`} style={{width: "100%"}} />
                        <hr />

                        <header className="main">
                            <h2>✅  2017. 03 ~ 2018. 04 (1년 2개월)</h2>
                        </header>
                        <img src={`${import.meta.env.BASE_URL}images/study-english.png`} style={{width: "100%"}} />
                        <hr />


                       

                        <header className="main">
                            <h1>✅ 2016. 08 ~ 2017. 01(6개월)</h1>
                        </header>




{/* 
                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/cat-revolution.jpeg`} style={{ height: 300 }} alt="진화" /></span>
                        <TimeLine data={timeLineData} /> */}
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}