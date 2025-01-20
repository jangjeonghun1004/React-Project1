import PageTemplate from "../PageTemplate";
import { Link } from "react-router-dom";

export default function Certbot() {
    return (
        <PageTemplate title="Depoloying" subTitle="Certbot" imageSrc="img01.jpeg">
            <h2>Certbot</h2>
            <p style={{ maxWidth: "95ch" }}>
                Certbot은 무료 및 오픈 소스 도구로, Let's Encrypt 인증서를 자동으로 발급 및 갱신하여 웹 서버에 HTTPS를 설정할 수 있게 도와줍니다.
                Let's Encrypt는 무료 SSL/TLS 인증서를 제공하는 인증 기관(CA)입니다.
            </p>

            <h2>주요 특징</h2>
            <dl>
                <dt>SSL/TLS 인증서 발급 및 갱신 자동화</dt>
                <dd>
                    <blockquote>
                        Certbot은 인증서 요청, 설치, 갱신 과정을 자동화합니다.<br />
                        Let's Encrypt를 사용해 인증서를 발급받아 서버에 HTTPS를 설정합니다.
                    </blockquote>
                </dd>
                <dt>다양한 웹 서버 지원</dt>
                <dd>
                    <blockquote>
                        Apache, Nginx와 같은 일반적인 웹 서버와 통합할 수 있습니다.<br />
                        웹 서버 설정을 자동으로 업데이트하거나 인증서만 발급받을 수도 있습니다.
                    </blockquote>
                </dd>
                <dt>무료 및 간편한 사용</dt>
                <dd><blockquote>누구나 무료로 SSL/TLS 인증서를 받을 수 있으며 명령어 몇 줄로 설치가 가능합니다.</blockquote></dd>
            </dl>

            <h2>설치 방법</h2>
            <dl>
                <dt></dt>
                <dd>
                    <blockquote>
                        운영 체제에 따라 설치 방법이 다릅니다. 예를 들어, Ubuntu에서 설치하려면<br />
                        <code>sudo apt update</code><br />
                        <code>sudo apt install certbot python3-certbot-nginx</code>
                        <br/><br/>
                        <Link to="/">Docker에서 Certbot 설치하기 →</Link>
                    </blockquote>
                </dd>
            </dl>

            <h2>사용 사례</h2>
            <dl>
                <dt>새로운 인증서 발급</dt>
                <dd>
                    <blockquote>
                        <code>터미널 프롬프트$ certbot --nginx</code><br />
                        Nginx 웹 서버의 경우 위 명령어로 인증서 발급 및 서버 설정을 자동화합니다.
                    </blockquote>
                </dd>
                <dt>자동 갱신</dt>
                <dd>
                    <blockquote>
                        Let's Encrypt 인증서는 90일간 유효합니다.<br />
                        Certbot은 certbot renew 명령어 또는 Cron 작업으로 인증서를 자동 갱신할 수 있습니다.
                    </blockquote>
                </dd>
                <dt>주요 옵션</dt>
                <dd>
                    <blockquote>
                        --apache: Apache 서버용 SSL/TLS 설정.<br />
                        --nginx: Nginx 서버용 SSL/TLS 설정.<br />
                        --standalone: 별도의 웹 서버 없이 자체 서버에서 인증서를 발급.<br />
                        --dry-run: 갱신 테스트를 위한 시뮬레이션 실행.<br />
                    </blockquote>
                </dd>
            </dl>
        </PageTemplate>
    );
}