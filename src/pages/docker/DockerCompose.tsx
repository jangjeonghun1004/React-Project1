import PageTemplate from "../PageTemplate";

export default function DockerCompose() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker Compose" imageSrc="img01.jpeg">
            <h2>Docker Compose</h2>
            <div className="box">
                <p>여러 컨테이너를 정의하고 관리하기 위한 도구입니다.</p>
            </div>

            <h2>특징</h2>
            <ul>
                <li>YAML 파일(docker-compose.yml)을 사용하여 서비스 구성(네트워크, 볼륨, 환경 변수 등)을 정의합니다.</li>
                <li>복잡한 멀티 컨테이너 애플리케이션을 쉽게 관리할 수 있도록 돕습니다.</li>
            </ul>

            <h2>사용 예</h2>
            <ul>
                <li>docker-compose up 명령어로 정의된 모든 컨테이너를 한 번에 실행합니다.</li>
                <li>개발 및 테스트 환경에서 유용하게 사용됩니다.</li>
            </ul>

            <h2>명령어</h2>
            <pre>
                <code>
                    {`
some code
                    `}
                </code>
            </pre>
        </PageTemplate>
    )
}