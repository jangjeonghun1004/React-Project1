import CurriculumVitae from "../widgets/curriculumVitae/CurriculumVitae";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import CardStyle3 from "../shared/card/CardStyle3";
import CardStyle2 from "../shared/card/CardStyle2";
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






                    <ScrollAnimation>
                        <section>
                            <header className="major">
                                <h2>포트폴리오 주요 기능</h2>
                            </header>
                            <div className="posts">
                                <CardStyle2
                                    image="./images/todo-screenshot.png"
                                    title="TO DO"
                                    text="할 일을 추가, 관리, 수정 및 삭제 기능을 테스트 할 수 있는 React 기반 애플리케이션입니다."
                                    linkPath="toDo"
                                />
                                <CardStyle2
                                    image="./images/signIn.png"
                                    title="회원 인증"
                                    text="회원 가입, 로그 인 및 로그 아웃 기능을 테스트 할 수 있는 React 기반 애플리케이션입니다."
                                    linkPath="signIn"
                                />
                                <CardStyle2
                                    image="./images/post.png"
                                    title="자유 게시판"
                                    text="게시물 작성, 수정, 삭제, 댓글 작성, 삭제 및 좋아요 기능을 테스트 할 수 있는 React 기반 애플리케이션입니다."
                                    linkPath="post"
                                />
                            </div>
                        </section>
                    </ScrollAnimation>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Home