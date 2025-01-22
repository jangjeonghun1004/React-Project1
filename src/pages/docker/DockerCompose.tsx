import ScrollAnimation from "../../widgets/scrollAnimation/ScrollAnimation";
import PageTemplate from "../PageTemplate";

export default function DockerCompose() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker Compose" imageSrc="img01.jpeg">
            <h2>Docker Compose</h2>
            <div className="box">
                <p>여러 컨테이너를 정의하고 관리하기 위한 도구입니다.</p>
            </div>

            <ScrollAnimation alwaysVisible>
                <h2>특징</h2>
                <ul>
                    <li>YAML 파일(docker-compose.yml)을 사용하여 서비스 구성(네트워크, 볼륨, 환경 변수 등)을 정의합니다.</li>
                    <li>복잡한 멀티 컨테이너 애플리케이션을 쉽게 관리할 수 있도록 돕습니다.</li>
                </ul>
            </ScrollAnimation>

            <ScrollAnimation>
                <h2>명령어</h2>
                <pre>
                    <code>⭐️{`
// docker-compose.yml 파일에 정의된 서비스들을 빌드(필요한 경우)하고 실행합니다.
% docker compose up

  현재 디렉터리에 있는 docker-compose.yml 파일을 자동으로 찾아서 사용합니다.
  -d 옵션을 추가하면 백그라운드에서 실행됩니다 (detached mode).

// 예시
% docker compose up (포그라운드 실행)
% docker compose up -d (백그라운드 실행)
                `}</code>
                    <br />
                    <code>⭐️{`
// docker-compose.yml 파일에 의해 실행된 컨테이너들을 중지하고 제거합니다.
% docker compose down
                `}</code>
                    <br />
                    <code>⭐️{`
// docker-compose.yml 파일에 정의된 서비스들의 상태를 표시합니다 (실행 중, 중지됨 등).
% docker compose ps
                `}</code>
                    <br />
                    <code>{`
// docker compose up 또는 docker compose stop으로 중지된 컨테이너들을 docker-compose.yml 파일에 정의된 대로 시작합니다.
% docker compose start
  주의: docker-compose.yml 파일이 변경된 경우, 변경사항을 적용하려면 먼저 docker compose up -d를 실행해야 합니다.

// docker-compose.yml 파일에 정의된 실행 중인 컨테이너들을 중지합니다.
// 컨테이너는 삭제되지 않으며, 나중에 docker compose start로 다시 시작할 수 있습니다.
% docker compose stop

// docker-compose.yml 파일에 정의된 실행 중인 컨테이너들을 중지하고 다시 시작합니다.
% docker compose restart
                `}</code>
                    <br />
                    <code>{`
// docker-compose.yml 파일에 정의된 서비스들을 빌드합니다.
% docker compose build

  이미지가 변경되었거나 Dockerfile을 기반으로 빌드해야 할 때 사용합니다.
  --no-cache 옵션을 사용하면 캐시를 사용하지 않고 빌드합니다.
                `}</code>
                    <br />
                    <code>{`
// docker-compose.yml 파일에 의해 빌드된 이미지들을 Docker 레지스트리 (Docker Hub 등)에 푸시합니다.
// docker-compose.yml 파일에 이미지 이름이 명확히 정의되어 있어야 합니다.
% docker compose push

// docker-compose.yml 파일에 명시된 이미지들을 Docker 레지스트리에서 가져옵니다.
% docker compose pull
                `}</code>
                    <br />
                    <code>⭐️{`
// docker-compose.yml 파일에 사용된 이미지 목록을 표시합니다.
% docker compose images
                `}</code>
                    <br />
                    <code>{`
// docker-compose.yml 파일에 정의된 중지된 컨테이너를 제거합니다.
// 실행 중인 컨테이너는 제거하지 않습니다.
% docker compose rm

// docker-compose.yml 파일에 정의된 실행 중인 컨테이너를 즉시 중지시킵니다.
// docker compose stop과는 다르게 SIGKILL 시그널을 사용하여 강제로 중지합니다.
% docker compose kill
                `}</code>
                </pre>
            </ScrollAnimation>

        </PageTemplate>
    )
}