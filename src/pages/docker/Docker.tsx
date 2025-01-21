import PageTemplate from "../PageTemplate";
import ScrollAnimation from "../../widgets/scrollAnimation/ScrollAnimation";

export default function Docker() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker" imageSrc="img01.jpeg">
            <h2>Docker란?</h2>
            <div className="box">
                <p>
                    Docker는 애플리케이션을 컨테이너라는 단위로 패키징, 배포, 실행하는 플랫폼입니다.
                    컨테이너는 독립된 환경에서 애플리케이션을 실행할 수 있도록 경량화된 가상화를 제공합니다.
                </p>
            </div>

            <h3>Docker 명령어</h3>
            <pre>
                <code>{`
docker ps: 현재 실행 중인 컨테이너 목록을 보여줍니다.
docker ps -a: 모든 컨테이너 목록을 보여줍니다 (실행 중, 중지됨 포함).
docker ps -q: 컨테이너 ID만 보여줍니다.
                `}</code>
                <br />
                <code>{`
docker exec: 실행 중인 컨테이너 내부에서 명령어를 실행합니다.
docker exec -it 컨테이너이름 명령어: 컨테이너 내부에서 명령어를 실행합니다. -it 옵션은 대화형 터미널을 사용하기 위한 것입니다.
docker exec -it 컨테이너이름 bash: 컨테이너 내부에서 bash 셸을 실행합니다.
                `}</code>
                <br />
                <code>{`
docker logs: 컨테이너의 로그를 출력합니다.
docker logs 컨테이너이름 또는 docker logs 컨테이너ID
-f: 실시간으로 로그를 출력합니다.
                `}</code>
            </pre>

            <ScrollAnimation>
                <h3>Ubuntu Server에 Docker & Docker Compose 설치</h3>
                <pre>
                    <code>{`
// 1단계: 패키지 업데이트
sudo apt update
                `}</code>
                    <br />
                    <code>{`
// 2단계: 필요한 패키지 설치
sudo apt install apt-transport-https ca-certificates curl software-properties-common
                `}</code>
                    <br />
                    <code>{`
// 3단계: Docker 공식 GPG 키 추가
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
                `}</code>
                    <br />
                    <code>{`
// 4단계: Docker 저장소 추가
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] 
https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
                `}</code>
                    <br />
                    <code>{`
// 5단계: 패키지 업데이트 다시 실행
sudo apt update
                `}</code>
                    <br />
                    <code>{`
// 6단계: Docker 설치
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
                `}</code>
                    <br />
                    <code>{`
// 7단계: Docker 서비스 활성화 및 실행
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
                `}</code>
                    <br />
                    <code>{`
// Docker 설치 확인
docker --version
docker compose version
                `}</code>
                    <br />
                    <code>{`
// Docker를 일반 사용자 권한으로 사용하고 싶다면, Docker 그룹에 사용자를 추가해야 합니다.
sudo usermod -aG docker $USER

// 체크 사항
newgrp docker 명령어를 실행하거나 재로그인해야 변경 사항이 적용됩니다.
                `}</code>
                </pre>
            </ScrollAnimation>
        </PageTemplate>
    );
}

