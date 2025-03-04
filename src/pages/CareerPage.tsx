import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import ScrollAnimation from "../widgets/scrollAnimation/ScrollAnimation";

export default function CareerPage() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h2>✅ 2018 ~ 2024 (6년 5개월)</h2>
                        </header>
                        <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/qexpress-1.svg`} alt="" /></span>
                        <ScrollAnimation>
                            <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/qexpress-2.svg`} alt="" /></span>
                        </ScrollAnimation>
                        <hr />

                        <ScrollAnimation>
                            <header className="main">
                                <h2>✅  2017 ~ 2018 (1년 2개월)</h2>
                            </header>
                            <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/study-english.svg`} alt="" /></span>
                            <hr />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <header className="main">
                                <h2>✅ 2013 ~ 2016 (3년 1개월)</h2>
                            </header>
                            <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/totorosa.svg`} alt="" /></span>
                            <hr />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <header className="main">
                                <h2>✅ 2006 ~ 2013 (6년 7개월)</h2>
                            </header>
                            <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/tendr.svg`} alt="" /></span>
                            <hr />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <header className="main">
                                <h2>✅ 개발 기술 및 능력</h2>
                            </header>
                            <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/developments1.svg`} alt="" /></span>
                            <span className="image fit"><img src={`${import.meta.env.BASE_URL}images/developments2.svg`} alt="" /></span>
                        </ScrollAnimation>
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}