import PageTemplate from "../PageTemplate";

export default function  DockerImage() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker Image" imageSrc="img01.jpeg">
            <h2>Docker image란?</h2>
            <div className="box">
                <p>컨테이너를 실행하기 위한 읽기 전용 템플릿입니다.</p>
            </div>

            <h2>특징</h2>
            <ul>
                <li>애플리케이션과 실행에 필요한 모든 종속성(라이브러리, 설정 파일 등)을 포함합니다.</li>
                <li>특정 상태의 애플리케이션 스냅샷처럼 동작합니다.</li>
            </ul>

            <h2>사용 예</h2>
            <ul>
                <li>docker build 명령어로 이미지를 생성합니다.</li>
                <li>생성된 이미지는 컨테이너 실행의 기반으로 사용됩니다.</li>
            </ul>
        </PageTemplate>
    );
}