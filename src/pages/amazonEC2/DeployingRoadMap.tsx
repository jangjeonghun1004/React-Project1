import PageTemplate from "../PageTemplate";
import CardStyle3 from "../../shared/card/CardStyle3";


export default function DeployingRoadMap() {
    return (
        <PageTemplate title="Deploying-학습 로드 맵" subTitle="" imageSrc="">
            <section>
                <dl>
                    <dt>Amazon EC2</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-sink"
                                title="Ubuntu Server"
                                text="Ubuntu Server는 Linux 기반 운영 체제로, 서버 환경에 최적화된 버전입니다."
                                linkPath="ubuntu"
                            />
                            <CardStyle3
                                icon="icon solid fa-ghost"
                                title="Nginx"
                                text="Nginx는 효율적이고 강력한 웹 서버 및 리버스 프록시 도구입니다."
                                linkPath="nginx"
                            />
                            <CardStyle3
                                icon="icon solid fa-lock"
                                title="Certbot"
                                text="Let's Encrypt 인증서를 자동으로 발급 및 갱신하여 웹 서버에 HTTPS를 설정할 수 있게 도와줍니다. "
                                linkPath="certbot"
                            />
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>Docker</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-rocket"
                                title="Docker"
                                text="Docker는 애플리케이션을 컨테이너라는 단위로 패키징, 배포, 실행하는 플랫폼입니다."
                                linkPath="docker"
                            />
                            <CardStyle3
                                icon="icon solid fa-paper-plane"
                                title="Docker Image"
                                text="Container(컨테이너)를 실행하기 위한 읽기 전용 템플릿입니다."
                                linkPath="dockerImage"
                            />
                            <CardStyle3
                                icon="icon solid fa-ghost"
                                title="Docker Container"
                                text="Docker Image(이미지)를 실행하여 생성된 가상 환경입니다."
                                linkPath="dockerContainer"
                            />
                            <CardStyle3
                                icon="icon solid fa-gavel"
                                title="Docker Compose"
                                text="여러 Container(컨테이너)를 정의하고 관리하기 위한 도구입니다."
                                linkPath="dockerCompose"
                            />
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>Github</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-sink"
                                title="GitHub"
                                text="GitHub는 소프트웨어 개발 프로젝트를 관리하고 협업할 수 있는 플랫폼으로, 주로 Git 버전 관리 시스템을 기반으로 작동합니다."
                                linkPath="gitHub"
                            />
                            <CardStyle3
                                icon="icon solid fa-rocket"
                                title="GitHub Actions"
                                text="GitHub Actions는 GitHub 저장소에서 CI/CD(Continuous Integration/Continuous Deployment) 워크플로를 자동화할 수 있는 도구입니다."
                                linkPath="gitHubActions"
                            />
                        </div>
                    </dd>
                </dl>
            </section>
        </PageTemplate>
    );
}