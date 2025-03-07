import PageTemplate from "../PageTemplate";
import CardStyle3 from "../../shared/card/CardStyle3";

export default function SpringBootRoadMapPage() {
    return (
        <PageTemplate>
            <section>
                <dl>
                    <dt>DEVELOPER TOOLS</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-paper-plane"
                                title="Lombok"
                                text="Lombok은 Java에서 반복적인 코드 작성을 줄이고 생산성을 높이는 라이브러리입니다."
                                linkPath="lombok"
                            />
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>WEB</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon fa-gem"
                                title="Spring MVC"
                                text="Spring MVC는 Spring Framework의 웹 애플리케이션 개발을 위한 핵심 구성 요소 중 하나"
                                linkPath="springMvc"
                            />
                            <CardStyle3
                                icon="icon icon solid fa-gavel"
                                title="Spring REST"
                                text="Spring REST는 Spring Framework에서 제공하는 RESTful 웹 서비스를 개발하기 위한 강력한 도구입니다."
                                linkPath="springRest"
                            />
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>SECURITY</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-rocket"
                                title="Spring Security"
                                text="Spring Security는 애플리케이션의 인증(Authentication)과 권한 부여(Authorization)를 관리하는 강력한 프레임워크입니다."
                                linkPath="springSecurity"
                            />
                            <CardStyle3
                                icon="icon solid fa-lock"
                                title="OAuth2 Client"
                                text="OAuth2 Client는 OAuth 2.0 프로토콜을 사용하여 외부 인증 및 권한 부여 서버와 상호작용하는 역할을 합니다."
                                linkPath="oauth2Client"
                            />
                            <CardStyle3
                                icon="icon solid fa-sign-out-alt"
                                title="Spring Security JWT"
                                text="Spring Security JWT는 JSON Web Token(JWT)을 활용한 인증 및 권한 부여를 처리하는 데 사용됩니다."
                                linkPath="springSecurityJwt"
                            />
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>SQL</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-paper-plane"
                                title="Spring JPA"
                                text="Spring Data JPA는 JPA(Java Persistence API)를 기반으로 데이터베이스와의 상호작용을 간소화하기 위해 제공되는 Spring 프로젝트입니다."
                                linkPath="springJpa"
                            />
                            <CardStyle3
                                icon="icon fa-gem"
                                title="Spring Data JDBC"
                                text="Spring Data JDBC는 간단하고 가볍게 데이터 액세스 계층을 개발할 수 있도록 지원하는 Spring Data 프로젝트의 한 부분입니다."
                                linkPath="springDataJdbc"
                            />
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt>ETC</dt>
                    <dd>
                        <div className="features">
                            <CardStyle3
                                icon="icon solid fa-signal"
                                title="SpringFramework ASYNC"
                                text="Callable<T> 인터페이스, DeferedResult<T> 클래스, CompletableFuture<T> 클래스"
                                linkPath="springframeworkAsync"
                            />
                        </div>
                    </dd>
                </dl>
            </section>
        </PageTemplate>
    );
}