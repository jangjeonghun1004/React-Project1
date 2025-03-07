import PageTemplate from "../PageTemplate";

export default function GitHubActions() {
    return (
        <PageTemplate>
            <h2>Git Hub Actions</h2>
            <div className="box">
                GitHub Actions는 GitHub 저장소에서 CI/CD(Continuous Integration/Continuous Deployment) 워크플로를 자동화할 수 있는 도구입니다.
                저장소 내의 코드를 테스트, 빌드, 배포 등의 작업을 실행하도록 YAML 파일 형식으로 워크플로를 정의할 수 있습니다.
            </div>

            <h2>Git Hub Actions 주요 특징</h2>
            <dl>
                <dd>
                    <blockquote>
                        자동화<br />코드 변경 이벤트(Push, PR 등)에 따라 스크립트를 실행.
                    </blockquote>
                </dd>
                <dd>
                    <blockquote>
                        사용자 지정 워크플로<br />다양한 작업을 순서대로 정의 가능.
                    </blockquote>
                </dd>
                <dd>
                    <blockquote>
                        다양한 실행 환경<br />Linux, macOS, Windows 지원.
                    </blockquote>
                </dd>
                <dd>
                    <blockquote>
                        Marketplace<br />커뮤니티에서 제공하는 액션(플러그인) 사용 가능.
                    </blockquote>
                </dd>
                <dd>
                    <blockquote>
                        통합성<br />GitHub와 완전히 통합되어 코드 관리 및 배포가 간편.
                    </blockquote>
                </dd>
            </dl>

            <h2>Git Hub Actions 사용법</h2>
            <pre>
                <code>{`
name: Node.js CI/CD

on:
  push:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18.x'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: "$"{{ secrets.DEPLOY_HOST }}
          username: "$"{{ secrets.DEPLOY_USER }}
          key: "$"{{ secrets.DEPLOY_KEY }}
          port: "$"{{ secrets.DEPLOY_PORT }}
          source: ./
          target: /var/www/my-app
      
      - name: Restart Application
        uses: appleboy/ssh-action@master
        with:
          host: "$"{{ secrets.DEPLOY_HOST }}
          username: "$"{{ secrets.DEPLOY_USER }}
          key: "$"{{ secrets.DEPLOY_KEY }}
          port: "$"{{ secrets.DEPLOY_PORT }}
          script: |
            cd /var/www/my-app
            pm2 restart my-app
                `}</code>
                <br />
                <code>{`
1. name: Node.js CI/CD: 워크플로우의 이름을 정의합니다. GitHub Actions 워크플로우 탭에 표시되는 이름입니다.

2. on:: 워크플로우를 실행할 트리거를 정의합니다.
    push:: push 이벤트가 발생했을 때 워크플로우를 실행합니다.
    branches: - main: main 브랜치에 푸시되었을 때만 워크플로우를 실행합니다.

3. jobs:: 워크플로우를 구성하는 여러 작업을 정의합니다.

    build-and-test:: 빌드 및 테스트 작업을 정의합니다.
        runs-on: ubuntu-latest: Ubuntu 최신 버전의 환경에서 작업을 실행합니다.
        steps:: 작업을 구성하는 세부 단계를 정의합니다.
        actions/checkout@v4: 저장소의 코드를 워크플로우 환경에 체크아웃합니다.
        actions/setup-node@v4: Node.js 환경을 설정합니다. node-version을 설정하여 특정 버전의 Node.js를 사용할 수 있습니다.
        npm ci: 의존성을 설치합니다. (프로젝트 내 package-lock.json 파일 사용)
        npm test: 테스트를 실행합니다. (프로젝트 내 test 스크립트 실행)
    deploy:: 배포 작업을 정의합니다.
    needs: build-and-test: build-and-test 작업이 성공적으로 완료된 후에 이 작업을 실행합니다.
    runs-on: ubuntu-latest: Ubuntu 최신 버전의 환경에서 작업을 실행합니다.
    steps:: 작업을 구성하는 세부 단계를 정의합니다.
        appleboy/scp-action@master: SSH를 이용하여 원격 서버에 코드를 배포합니다.
            secrets.DEPLOY_HOST, secrets.DEPLOY_USER, secrets.DEPLOY_KEY, secrets.DEPLOY_PORT
            GitHub 저장소의 설정 > Secrets and variables > Actions 탭에서 설정해야 합니다.

            source: ./: 현재 워크플로우 디렉토리의 모든 파일을 원격 서버에 업로드합니다.
            target: /var/www/my-app: 원격 서버의 목표 디렉토리입니다.
        appleboy/ssh-action@master: SSH를 이용하여 원격 서버에 명령어를 실행합니다.
            script:: 원격 서버에서 실행할 명령어입니다.

4. Secret 설정: DEPLOY_HOST, DEPLOY_USER, DEPLOY_KEY, DEPLOY_PORT 와 같은 민감한 정보는 
   GitHub repository setting > Secrets and variables > Actions 에서 설정해야 합니다.

샘플 코드 사용 방법:
    GitHub 저장소의 루트 디렉터리에 .github/workflows 디렉토리를 생성합니다.
    main.yml이라는 이름으로 YAML 파일을 생성하고 위의 코드를 붙여넣습니다. (.github/workflows/main.yml)
    원격 서버 배포를 위해 DEPLOY_HOST, DEPLOY_USER, DEPLOY_KEY, DEPLOY_PORT 를 GitHub Secrets 에 추가합니다.
    코드를 main 브랜치에 푸시하면 자동으로 워크플로우가 실행됩니다.
    Actions 탭에서 워크플로우 실행 결과를 확인할 수 있습니다.
                `}</code>
            </pre>
        </PageTemplate>
    );
}