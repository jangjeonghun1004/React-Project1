import ScrollAnimation from "../../widgets/scrollAnimation/ScrollAnimation";
import PageTemplate from "../PageTemplate";

export default function DockerImage() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker Image" imageSrc="img01.jpeg">
            <h2>Docker Image란?</h2>
            <div className="box">
                <p>컨테이너를 실행하기 위한 읽기 전용 템플릿입니다.</p>
            </div>

            <ScrollAnimation alwaysVisible>
                <h2>특징</h2>
                <ul>
                    <li>애플리케이션과 실행에 필요한 모든 종속성(라이브러리, 설정 파일 등)을 포함합니다.</li>
                    <li>특정 상태의 애플리케이션 스냅샷처럼 동작합니다.</li>
                </ul>
            </ScrollAnimation>

            <ScrollAnimation>
                <h2>명령어</h2>
                <pre>
                    <code>{`
// Docker Hub 또는 설정된 레지스트리에서 이미지를 다운로드합니다. 
// 태그를 지정하지 않으면 latest 태그를 사용합니다.
% docker pull <이미지 이름>:<태그>
% docker pull ubuntu:20.04 (Ubuntu 20.04 이미지를 다운로드)
% docker pull nginx (nginx 최신 이미지를 다운로드)
                `}</code>
                    <br />
                    <code>{`
// 로컬 시스템에 저장된 이미지 목록을 보여줍니다.
% docker images
                `}</code>
                    <br />
                    <code>{`
// 로컬 시스템에서 이미지를 삭제합니다.
% docker rmi <이미지 ID 또는 이름[:태그]>
% docker rmi ubuntu:20.04 (ubuntu 20.04 이미지 삭제)

// 모든 이미지 삭제 - 주의해서 사용하세요!
% docker rmi $(docker images -q)
                `}</code>
                    <br />
                    <code>{`
// 사용되지 않는(dangling) 이미지들을 삭제합니다. 공간 확보에 유용합니다.
% docker image prune

// 사용하지 않는 모든 이미지 삭제.
% docker image prune -a
                `}</code>
                    <br />
                    <code>{`
// Dockerfile을 기반으로 이미지를 빌드합니다.
% docker build -t <이미지 이름>:<태그> <Dockerfile 경로>

-t 옵션으로 이미지 이름과 태그를 지정할 수 있습니다.
<Dockerfile 경로>는 Dockerfile이 위치한 디렉토리를 지정합니다. 
.을 사용하면 현재 디렉토리를 의미합니다.
                `}</code>
                    <br />
                    <code>{`
// Docker Hub 또는 설정된 레지스트리에 이미지를 업로드합니다.
% docker push <이미지 이름>:<태그>

업로드하기 전에 docker login을 통해 레지스트리에 로그인해야 합니다.
                `}</code>
                    <br />
                </pre>
            </ScrollAnimation>
        </PageTemplate>
    );
}