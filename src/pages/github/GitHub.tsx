import ScrollAnimation from "../../widgets/scrollAnimation/ScrollAnimation";
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

            <ScrollAnimation alwaysVisible>
                <h2>주요 기능</h2>
                <ul>
                    <li>코드 호스팅</li>
                    <li>Git 버전 관리</li>
                    <li>협업 도구 (Pull Request, Code Review)</li>
                    <li>프로젝트 관리 (Issue Tracking, Kanban 보드)</li>
                    <li>CI/CD 통합 (예: GitHub Actions)</li>
                    <li>오픈소스 기여 환경 제공</li>
                </ul>
            </ScrollAnimation>
            <ScrollAnimation>
                <h2>명령어</h2>
                <pre>
                    <code>{`
// 로컬 브랜치의 커밋을 원격 저장소(GitHub)에 업로드합니다.
% git push <remote_name> <branch_name> 
  git push origin main: 로컬 main 브랜치를 origin 원격 저장소의 main 브랜치로 푸시합니다.

// 원격 저장소(GitHub)의 변경 사항을 로컬 브랜치로 가져옵니다.
% git pull <remote_name> <branch_name>
  git pull origin main: origin 원격 저장소의 main 브랜치 내용을 로컬 main 브랜치로 가져옵니다.
                    `}</code>
                    <br />
                    <code>{`
// 새로운 Git 저장소를 현재 디렉토리에 생성합니다. (GitHub에 올릴 로컬 저장소를 만들 때 사용)
% git init

// 원격 저장소(GitHub)의 코드를 로컬 디렉토리로 복제합니다. (GitHub 저장소를 내 컴퓨터에 가져올 때 사용)
% git clone <repository_url>

// 변경된 파일을 스테이징 영역에 추가합니다. (커밋할 파일을 준비할 때 사용)
% git add <file> 또는 git add .

// 스테이징 영역의 변경 사항을 커밋합니다. 커밋 메시지는 변경 내용을 설명해야 합니다.
% git commit -m "<commit_message>"

// 현재 저장소의 변경 사항과 상태를 확인합니다. (변경된 파일, 스테이징 여부 등을 확인할 때 사용)
% git status

// 브랜치를 확인하거나, 새로운 브랜치를 생성합니다.
% git branch

// 현재 브랜치와 로컬 브랜치 목록을 보여줍니다.
% git branch

//  새로운 브랜치를 생성합니다.
% git branch <branch_name>

// 지정된 브랜치로 이동합니다. (다른 브랜치로 작업할 때 사용)
% git checkout <branch_name>

// 새로운 브랜치를 생성하고 해당 브랜치로 이동합니다.
% git checkout -b <new_branch_name>

// 현재 브랜치에 지정된 브랜치의 변경 사항을 병합합니다.
% git merge <branch_name>

// 커밋 히스토리를 확인합니다.
% git log

// 원격 저장소를 추가합니다.
% git remote add <remote_name> <repository_url>

// origin이라는 이름으로 원격 저장소를 추가합니다.
% git remote add origin <repository_url>
                    `}</code>
                </pre>
            </ScrollAnimation>
        </PageTemplate>
    );
}