import PageTemplate from "../PageTemplate";

export default function GitHubActions() {
    return (
        <PageTemplate title="Deploying" subTitle="Git Hub Actions" imageSrc="img01.jpeg">
            <h2>Git Hub Actions란?</h2>
            <div className="box">
                <p>
                    GitHub Actions는 GitHub 저장소에서 CI/CD(Continuous Integration/Continuous Deployment) 워크플로를 자동화할 수 있는 도구입니다.
                    저장소 내의 코드를 테스트, 빌드, 배포 등의 작업을 실행하도록 YAML 파일 형식으로 워크플로를 정의할 수 있습니다.
                </p>
            </div>

            <h2>주요 특징</h2>
            <dl>
                <dt>자동화</dt>
                <dd>
                    <blockquote>
                        코드 변경 이벤트(Push, PR 등)에 따라 스크립트를 실행.
                    </blockquote>
                </dd>
                <dt>사용자 지정 워크플로</dt>
                <dd>
                    <blockquote>
                        다양한 작업을 순서대로 정의 가능.
                    </blockquote>
                </dd>
                <dt>다양한 실행 환경</dt>
                <dd>
                    <blockquote>
                        Linux, macOS, Windows 지원.
                    </blockquote>
                </dd>
                <dt>Marketplace</dt>
                <dd>
                    <blockquote>
                        커뮤니티에서 제공하는 액션(플러그인) 사용 가능.
                    </blockquote>
                </dd>
                <dt>통합성</dt>
                <dd>
                    <blockquote>
                        GitHub와 완전히 통합되어 코드 관리 및 배포가 간편.
                    </blockquote>
                </dd>
            </dl>
        </PageTemplate>
    );
}