import PageTemplate from "../PageTemplate";

export default function DockerContainer() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker Container" imageSrc="img01.jpeg">
            <h2>Docker Container란</h2>
            <div className="box">
                <p>Docker Image를 실행하여 생성된 가상 환경입니다.</p>
            </div>

            <h2>특징</h2>
            <ul>
                <li>컨테이너는 독립된 애플리케이션 실행 환경을 제공합니다.</li>
                <li>컨테이너는 이미지의 읽기 전용 계층 위에 쓰기 가능한 계층을 추가해 동작합니다.</li>
            </ul>

            <h2>사용 예</h2>
            <ul>
                <li>docker run 명령어로 컨테이너를 실행합니다.</li>
                <li>컨테이너는 시작, 중지, 삭제가 가능합니다.</li>
            </ul>

            <h2>명령어</h2>
            <pre>
                <code>
                    {`
// 실행
docker run
                    `}
                </code>
            </pre>
        </PageTemplate>
    );
}