import PageTemplate from "../PageTemplate";

export default function Ubuntu() {
    return (
        <PageTemplate title="Deploying" subTitle="Ubunt Server" imageSrc={`${import.meta.env.BASE_URL}images/img01.jpeg`}>
            <h2 id="content">Ubuntu Server란?</h2>
            <p>
                Ubuntu Server는 Canonical Ltd.에서 개발한 인기 있는 Linux 기반 운영 체제로, 서버 환경에 최적화된 버전입니다.
                데스크톱 환경보다 가벼운 구조를 가지고 있으며, 서버 운영을 위한 다양한 기능과 도구를 제공합니다.
            </p>

            <h3>주요 특징</h3>
            <dl>
                <dt>경량화된 설계</dt>
                <dd>
                    <blockquote>
                        데스크톱 GUI가 기본적으로 포함되지 않아 리소스 사용이 적음.<br/>
                        CLI(명령줄 인터페이스) 중심으로 작동하여 높은 성능 제공.
                    </blockquote>
                </dd>
                <dt>광범위한 하드웨어 지원</dt>
                <dd>
                    <blockquote>
                    다양한 하드웨어 플랫폼(ARM, x86, PowerPC 등)에서 실행 가능.<br/>
                    클라우드 환경(예: AWS, Azure, Google Cloud)에서 널리 사용.
                    </blockquote>
                </dd>
                <dt> 패키지 관리</dt>
                <dd>
                    <blockquote>
                    APT 패키지 관리자를 사용하여 소프트웨어 설치 및 업데이트가 쉬움.<br/>
                    공식 및 사용자 커뮤니티에서 제공하는 풍부한 소프트웨어 저장소 지원.
                    </blockquote>
                </dd>
                <dt> 보안 강화</dt>
                <dd>
                    <blockquote>
                    AppArmor와 같은 보안 모듈 기본 제공.<br/>
                    정기적인 보안 업데이트 및 LTS(Long Term Support) 버전을 통한 장기 지원.
                    </blockquote>
                </dd>
                <dt>오픈 소스와 커뮤니티 지원</dt>
                <dd>
                    <blockquote>
                    무료로 사용할 수 있으며, 커뮤니티를 통해 활발한 지원을 받을 수 있음.<br/>
                    필요시 상용 지원 서비스(Enterprise 지원)도 제공.
                    </blockquote>
                </dd>
                <dt>서버 역할에 최적화</dt>
                <dd>
                    <blockquote>
                    웹 서버(Nginx, Apache), 데이터베이스(MySQL, PostgreSQL), 파일 서버(Samba) 등을 효율적으로 설정 가능.<br/>
                    Docker, Kubernetes와 같은 컨테이너 및 클라우드 기술과도 높은 호환성.
                    </blockquote>
                </dd>
            </dl>

            <h3>활용 예</h3>
            <ul>
                <li>웹 서버</li>
                <li>데이터베이스 서버</li>
                <li>파일/스토리지 서버</li>
                <li>클라우드 서버</li>
                <li>개발 및 테스트 환경</li>
            </ul>
        </PageTemplate>
    );
}