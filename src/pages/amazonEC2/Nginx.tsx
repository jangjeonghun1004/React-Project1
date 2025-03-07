import PageTemplate from "../PageTemplate";


export default function Nginx() {
    return (
        <PageTemplate>
            <h2>Nginx</h2>
            <div className="box">
                Nginx(엔진엑스)는 웹 서버 소프트웨어로, 주로 정적 콘텐츠 제공, 리버스 프록시, 로드 밸런싱, HTTP 캐싱, API 게이트웨이 역할 등을 수행합니다.
            </div>

            <h2>Nginx 주요 특징</h2>
            <dl>
                <dd>
                    <blockquote>고성능<br />비동기 이벤트 기반 아키텍처를 사용해 높은 동시성을 지원하며, 많은 요청을 처리할 수 있습니다.</blockquote>
                </dd>
                <dd>
                    <blockquote>리버스 프록시<br />백엔드 서버(예: Spring Boot 애플리케이션) 앞단에서 요청을 처리하고 전달하며, 보안 및 성능을 향상시킵니다.</blockquote>
                </dd>
                <dd>
                    <blockquote>로드 밸런싱<br />여러 백엔드 서버로 트래픽을 분산하여 고가용성과 부하 분산을 제공합니다.</blockquote>
                </dd>
                <dd>
                    <blockquote>정적 파일 서비스<br />HTML, CSS, JavaScript, 이미지 등 정적 콘텐츠를 빠르게 제공합니다.</blockquote>
                </dd>
                <dd>
                    <blockquote>확장성<br />모듈 기반으로 구성되어 다양한 기능을 쉽게 확장할 수 있습니다.</blockquote>
                </dd>
                <dd>
                    <blockquote>SSL/TLS 지원<br />HTTPS를 통해 보안 연결을 지원합니다.</blockquote>
                </dd>
            </dl>

            <h2>Nginx 일반적인 사용 사례</h2>
            <ul>
                <li>웹 서버: 정적 웹사이트 콘텐츠 제공.</li>
                <li>리버스 프록시: 애플리케이션 서버 앞단에서 클라이언트 요청 처리.</li>
                <li>로드 밸런싱: 여러 서버로 트래픽을 효율적으로 분배.</li>
                <li>API 게이트웨이: API 요청을 처리 및 라우팅.</li>
            </ul>

            <h2>Nginx를 Docker에 설치</h2>
            <pre>
                <code>{`
// 1단계: index.html 파일 생성
mkdir ~/my-website
echo "<h1>Hello from my Docker Nginx</h1>" > ~/my-website/index.html
                `}</code>
                <br />
                <code>{`
// 2단계: default.conf 폴더 및 파일을 생성 한 후 아래 내용을 추가
mkdir ~/my-nginx-config/nginx.conf

events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;
        
        location / {
            try_files $uri $uri/ =404;
        }
    }
                `}</code>
                <br />
                <code>{`
// 3단계: 도커 컨테이너 실행
 docker run -d -p 80:80 -v ~/my-website:/usr/share/nginx/html 
 -v ~/my-nginx-config/nginx.conf:/etc/nginx/nginx.conf 
 --name my-custom-nginx-with-config nginx

 // 옵션
 -d: 백그라운드 실행
 -p: 포트 설정
 -v: 볼륨 설정

// HTML 파일의 기본 경로
~/my-website

// 환경 설정 파일 경로
~/my-nginx-config/nginx.conf
                `}</code>
            </pre>
        </PageTemplate>
    );
}