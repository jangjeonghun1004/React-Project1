import CurriculumVitae from "../widgets/curriculumVitae/CurriculumVitae";
import Header from "../widgets/header/Header";
import IpSumSedDolor from "../widgets/ipsumSedDolor/IpsumSedDolor";
import Sidebar from "./Sidebar";
import CardStyle3 from "../shared/card/CardStyle3";

function Home() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <CurriculumVitae />

                    <section>
                        <header className="major">
                            <h2>React 학습 내역</h2>
                        </header>
                        <div className="features">
                            <CardStyle3 icon="icon fa-gem" title="useState" text="some text" />
                            <CardStyle3 icon="icon solid fa-paper-plane" title="useReducer" />
                            <CardStyle3 icon="icon solid fa-rocket" title="useContext" />
                            <CardStyle3 icon="icon solid fa-signal" title="useEffect" />
                            <CardStyle3 icon="icon fa-gem" title="useRef" />
                            <CardStyle3 icon="icon solid fa-paper-plane" title="BrowserRouter" />
                            <CardStyle3 icon="icon solid fa-rocket" title="Props" />
                            <CardStyle3 icon="icon solid fa-signal" title="Recoil" />
                            <CardStyle3 icon="icon solid fa-gavel" title="Optimization" />
                            <CardStyle3 icon="icon solid fa-gas-pump" title="ETC" />
                        </div>
                    </section>

                    <section>
                        <header className="major">
                            <h2>Spring Boot 학습 내역</h2>
                        </header>
                        <dl>
                            <dt>DEVELOPER TOOLS</dt>
                            <dd>
                                <div className="features">
                                    <CardStyle3 icon="icon solid fa-paper-plane" title="Lombok" />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>WEB</dt>
                            <dd>
                                <div className="features">
                                    <CardStyle3 icon="icon fa-gem" title="Spring MVC" text="some text" />
                                    <CardStyle3 icon="icon icon solid fa-gavel" title="Spring REST" text="some text" />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>SECURITY</dt>
                            <dd>
                                <div className="features">
                                    <CardStyle3 icon="icon solid fa-rocket" title="Spring Security" />
                                    <CardStyle3 icon="icon solid fa-lock" title="OAuth2 Client" />
                                    <CardStyle3 icon="icon solid fa-sign-out-alt" title="Spring Security JWT" />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>SQL</dt>
                            <dd>
                                <div className="features">
                                    <CardStyle3 icon="icon solid fa-paper-plane" title="Spring JPA" />
                                    <CardStyle3 icon="icon fa-gem" title="Spring Data JDBC" />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>ETC</dt>
                            <dd>
                                <div className="features">
                                    <CardStyle3 icon="icon solid fa-signal" title="SpringFramework ASYNC" />
                                </div>
                            </dd>
                        </dl>
                    </section>
                    <IpSumSedDolor />
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Home