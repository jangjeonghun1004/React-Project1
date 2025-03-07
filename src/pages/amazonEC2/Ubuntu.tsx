import ScrollAnimation from "../../widgets/scrollAnimation/ScrollAnimation";
import PageTemplate from "../PageTemplate";

export default function Ubuntu() {
    return (
        <PageTemplate>
            <h2>Ubuntu Server</h2>
            <div className="box">
                    Ubuntu Server는 Canonical Ltd.에서 개발한 인기 있는 Linux 기반 운영 체제로, 서버 환경에 최적화된 버전입니다.
                    데스크톱 환경보다 가벼운 구조를 가지고 있으며, 서버 운영을 위한 다양한 기능과 도구를 제공합니다.
            </div>

            <h2>Ubuntu Server 명령어</h2>
            <pre>
                <code>{`
// EC2 접속(원격 서버에 접속합니다)
% ssh -i <pem-file-name.pem> ubuntu@<ip>
% ssh -i example.pem ubuntu@0.0.0.0
                `}</code>
                <br />
                <code>{`
// root 계졍
$ sudo su
                `}</code>
                <br />
                <code>{`
// 관리자 권한으로 명령어를 실행합니다.
# sudo
                `}</code>
                <br />
                <code>{`
// 패키지 관리 도구 (Advanced Packaging Tool).
# sudo apt update: 패키지 목록을 업데이트합니다.
# sudo apt upgrade: 설치된 패키지를 업그레이드합니다.
# sudo apt install 패키지이름: 패키지를 설치합니다.
# sudo apt remove 패키지이름: 패키지를 제거합니다.
# sudo apt search 검색어: 패키지를 검색합니다.
                `}</code>
                <br />
                <code>{`
// 현재 디렉토리의 파일 및 디렉토리 목록을 보여줍니다
# ls
                `}</code>
                <br />
                <code>{`
// 디렉토리 변경 (Change Directory)
# cd 디렉토리이름: 해당 디렉토리로 이동합니다.
# cd ..: 상위 디렉토리로 이동합니다.
# cd ~: 홈 디렉토리로 이동합니다.
                `}</code>
                <br />
                <code>{`
// 새 디렉토리를 만듭니다 (Make Directory)
# mkdir 디렉토리이름: 해당 이름의 디렉토리를 생성합니다.
# mkdir -p /var/www/html
                `}</code>
                <br />
                <code>{`
// 디렉토리를 삭제합니다 (Remove Directory) 단, 비어 있는 디렉토리만 삭제 가능합니다
# rmdir 디렉토리이름: 해당 이름의 디렉토리를 삭제합니다.
                `}</code>
                <br />
                <code>{`
// 파일 또는 디렉토리를 삭제합니다 (Remove)
# rm 파일이름: 해당 파일을 삭제합니다.
# rm -r 디렉토리이름: 해당 디렉토리와 하위 파일/디렉토리를 모두 삭제합니다 (주의!).
# rm -rf 디렉토리이름: 강제로 해당 디렉토리와 하위 파일/디렉토리를 모두 삭제합니다 (더욱 주의!).
                `}</code>
                <br />
                <code>{`
// 파일 내용을 터미널에 출력합니다. 짧은 파일 내용 확인에 유용합니다.
# cat 파일이름: 파일 내용을 출력합니다.
                `}</code>
                <br />
                <code>{`
// 웹에서 파일을 다운로드합니다.
# wget 파일주소: 해당 주소의 파일을 다운로드합니다.
                `}</code>
                <br />
                <code>{`
// 텍스트 에디터
# sudo apt install vim

# vim <file-name>: 파일 생성
# i: 현재 커서 위치에서 입력 모드로 전환합니다 (insert).
# :w: 저장 (write)
# :q: 종료 (quit)
# :wq 또는 :x: 저장 후 종료
# :q!: 저장하지 않고 강제 종료
                `}</code>
            </pre>

            <ScrollAnimation>
                <h2>Ubuntu Server 주요 특징</h2>
                <dl>
                    <dt>경량화된 설계</dt>
                    <dd>
                        <blockquote>
                            데스크톱 GUI가 기본적으로 포함되지 않아 리소스 사용이 적음.<br />
                            CLI(명령줄 인터페이스) 중심으로 작동하여 높은 성능 제공.
                        </blockquote>
                    </dd>
                    <dt>광범위한 하드웨어 지원</dt>
                    <dd>
                        <blockquote>
                            다양한 하드웨어 플랫폼(ARM, x86, PowerPC 등)에서 실행 가능.<br />
                            클라우드 환경(예: AWS, Azure, Google Cloud)에서 널리 사용.
                        </blockquote>
                    </dd>
                    <dt> 패키지 관리</dt>
                    <dd>
                        <blockquote>
                            APT 패키지 관리자를 사용하여 소프트웨어 설치 및 업데이트가 쉬움.<br />
                            공식 및 사용자 커뮤니티에서 제공하는 풍부한 소프트웨어 저장소 지원.
                        </blockquote>
                    </dd>
                    <dt> 보안 강화</dt>
                    <dd>
                        <blockquote>
                            AppArmor와 같은 보안 모듈 기본 제공.<br />
                            정기적인 보안 업데이트 및 LTS(Long Term Support) 버전을 통한 장기 지원.
                        </blockquote>
                    </dd>
                    <dt>오픈 소스와 커뮤니티 지원</dt>
                    <dd>
                        <blockquote>
                            무료로 사용할 수 있으며, 커뮤니티를 통해 활발한 지원을 받을 수 있음.<br />
                            필요시 상용 지원 서비스(Enterprise 지원)도 제공.
                        </blockquote>
                    </dd>
                    <dt>서버 역할에 최적화</dt>
                    <dd>
                        <blockquote>
                            웹 서버(Nginx, Apache), 데이터베이스(MySQL, PostgreSQL), 파일 서버(Samba) 등을 효율적으로 설정 가능.<br />
                            Docker, Kubernetes와 같은 컨테이너 및 클라우드 기술과도 높은 호환성.
                        </blockquote>
                    </dd>
                </dl>
            </ScrollAnimation>

            <ScrollAnimation>
                <h2>Ubuntu Server 활용 예</h2>
                <ul>
                    <li>웹 서버</li>
                    <li>데이터베이스 서버</li>
                    <li>파일/스토리지 서버</li>
                    <li>클라우드 서버</li>
                    <li>개발 및 테스트 환경</li>
                </ul>
            </ScrollAnimation>
        </PageTemplate>
    );
}