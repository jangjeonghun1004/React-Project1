import CurriculumVitae from "../widgets/curriculumVitae/CurriculumVitae";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import ScrollAnimation from "../widgets/scrollAnimation/ScrollAnimation";
import StateManagementMap from "./reactStudyRoadMap/StateManagementMap";
import FeatureManagementMap from "./reactStudyRoadMap/FeatureManagementMap";
import HelperManagementMap from "./reactStudyRoadMap/HelperManagementMap";
import { PortfolioManagementMap } from "./portfolio/PortfolioManagementMap";
import { WebManagementMap } from "./springBootCurriculum/WebManagementMap";
import { SecurityManagementMap } from "./springBootCurriculum/SecurityManagementMap";
import { SqlManagementMap } from "./springBootCurriculum/SqlManagementMap";
import { CodeManagementMap } from "./springBootCurriculum/CodeManagementMap";
import { ServerManagementMap } from "./amazonEC2/ServerManagementMap";
import { DockerManagementMap } from "./docker/DockerManagementMap";
import { GithubManagementMap } from "./github/GithubManagementMap";

function Home() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <CurriculumVitae />

                    <section>
                        <header className="major">
                            <h2>주요 기능</h2>
                        </header>
                        <PortfolioManagementMap />
                    </section>

                    <section>
                        <header className="major">
                            <h2>React 학습 내역</h2>
                        </header>
                        <ScrollAnimation>
                            <StateManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <FeatureManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <HelperManagementMap />
                        </ScrollAnimation>
                    </section>

                    <section>
                        <header className="major">
                            <h2>Spring Boot 학습 내역</h2>
                        </header>
                        <ScrollAnimation>
                            <WebManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <SecurityManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <SqlManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <CodeManagementMap />
                        </ScrollAnimation>
                    </section>

                    <section>
                        <header className="major">
                            <h2>Deploying 학습 내역</h2>
                        </header>
                        <ScrollAnimation>
                            <ServerManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <DockerManagementMap />
                        </ScrollAnimation>

                        <ScrollAnimation>
                            <hr className="major" />
                            <GithubManagementMap />
                        </ScrollAnimation>
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Home