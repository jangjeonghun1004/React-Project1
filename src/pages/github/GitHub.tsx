import PageTemplate from "../PageTemplate";

export default function GitHub() {
    return (
        <PageTemplate title="Deploying" subTitle="Git Hub" imageSrc="img01.jpeg">
            <h2>Git Hub란?</h2>
            <div className="box">
                <p>
                    GitHub는 소프트웨어 개발 프로젝트를 관리하고 협업할 수 있는 플랫폼으로, 주로 Git 버전 관리 시스템을 기반으로 작동합니다.
                    개발자들이 코드 저장소를 생성하고, 변경 사항을 추적하며, 협업 도구(예: Pull Request, Issues, Discussions 등)를 활용할 수 있도록 지원합니다.
                </p>
            </div>

            <h2>주요 기능</h2>
            <ul>
                <li>코드 호스팅</li>
                <li>Git 버전 관리</li>
                <li>협업 도구 (Pull Request, Code Review)</li>
                <li>프로젝트 관리 (Issue Tracking, Kanban 보드)</li>
                <li>CI/CD 통합 (예: GitHub Actions)</li>
                <li>오픈소스 기여 환경 제공</li>
            </ul>
        </PageTemplate>
    );
}