import PageTemplate from "../PageTemplate";


export default function Nginx() {
    return (
        <PageTemplate title="Deploying" subTitle="Nginx" imageSrc="img01.jpeg" >
            <h2>Nginx란?</h2>
            <p>
                Nginx(엔진엑스)는 웹 서버 소프트웨어로, 주로 정적 콘텐츠 제공, 리버스 프록시, 로드 밸런싱, HTTP 캐싱, API 게이트웨이 역할 등을 수행합니다.
            </p>

            <h3>주요 특징</h3>
            <dl>
                <dt>고성능</dt>
                <dd>
                    <blockquote>비동기 이벤트 기반 아키텍처를 사용해 높은 동시성을 지원하며, 많은 요청을 처리할 수 있습니다.</blockquote>
                </dd>
                <dt>리버스 프록시</dt>
                <dd>
                    <blockquote>백엔드 서버(예: Spring Boot 애플리케이션) 앞단에서 요청을 처리하고 전달하며, 보안 및 성능을 향상시킵니다.</blockquote>
                </dd>
                <dt>로드 밸런싱</dt>
                <dd>
                    <blockquote>여러 백엔드 서버로 트래픽을 분산하여 고가용성과 부하 분산을 제공합니다.</blockquote>
                </dd>
                <dt>정적 파일 서비스</dt>
                <dd>
                    <blockquote>HTML, CSS, JavaScript, 이미지 등 정적 콘텐츠를 빠르게 제공합니다.</blockquote>
                </dd>
                <dt>확장성</dt>
                <dd>
                    <blockquote>모듈 기반으로 구성되어 다양한 기능을 쉽게 확장할 수 있습니다.</blockquote>
                </dd>
                <dt>SSL/TLS 지원</dt>
                <dd>
                    <blockquote>HTTPS를 통해 보안 연결을 지원합니다.</blockquote>
                </dd>
            </dl>

            <h3>일반적인 사용 사례</h3>
            <ul>
                <li>웹 서버: 정적 웹사이트 콘텐츠 제공.</li>
                <li>리버스 프록시: 애플리케이션 서버 앞단에서 클라이언트 요청 처리.</li>
                <li>로드 밸런싱: 여러 서버로 트래픽을 효율적으로 분배.</li>
                <li>API 게이트웨이: API 요청을 처리 및 라우팅.</li>
            </ul>
        </PageTemplate>
    );
}