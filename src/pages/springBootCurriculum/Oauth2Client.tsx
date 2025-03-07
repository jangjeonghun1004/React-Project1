import PageTemplate from "../PageTemplate";

export default function Oauth2Client() {
    return (
        <PageTemplate>
            <h2>Oauth2 Client</h2>
            <p className="box">
                OAuth2 Client는 OAuth 2.0 프로토콜을 사용하여 외부 인증 및 권한 부여 서버와 상호작용하는 역할을 합니다.
                이를 통해 애플리케이션은 사용자 인증을 처리하거나 특정 API에 액세스할 수 있는 권한을 요청할 수 있습니다.
                Spring Security에서 OAuth2 Client는 인증 공급자(예: Google, GitHub, Facebook)와 통신하고 사용자 정보를 가져오거나 액세스 토큰을 관리하는 데 사용됩니다.
            </p>

            <h2>Oauth2 Client 주요 기능</h2>
            <ul>
                <li>OAuth2 Login: 사용자가 소셜 로그인을 통해 인증할 수 있도록 지원 합니다.</li>
                <li>Authorized Client 관리: 인증된 클라이언트의 토큰을 저장하고 재사용 합니다.</li>
                <li>API 요청에 액세스 토큰 포함: 외부 API 호출 시 토큰 자동 포함 합니다.</li>
                <li>Token Refresh: 만료된 액세스 토큰을 새로 고침합니다.</li>
            </ul>

            <h2>Oauth2 Client 의존성 추가</h2>
            <div>
                <pre>
                    <code>
                        {`
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-oauth2-client</artifactId>
    </dependency>
</dependencies>
`}
                    </code>
                </pre>
            </div>

            <div className="row">
                <div className="col-12">
                    <h3>예제 코드(Oauth2 로그인)</h3>
                    <pre>
                        <code>
                            {`
@RestController
public class LoginController {
    @GetMapping("/loginSuccess")
    public String loginSuccess(@AuthenticationPrincipal OAuth2User oauth2User) {
        String email = oauth2User.getAttribute("email");
        return "Hello, " + email;
    }
}
`}
                        </code>
                    </pre>

                    <h3>예제 코드(외부 API 호출)</h3>
                    <pre>
                        <code>
                            {`
@RestController
@RequestMapping("/api")
public class ApiController {

    private final RestTemplate restTemplate;

    public ApiController(RestTemplateBuilder restTemplateBuilder, OAuth2AuthorizedClientService clientService) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @GetMapping("/profile")
    public String getGoogleProfile(@RegisteredOAuth2AuthorizedClient("google") OAuth2AuthorizedClient authorizedClient) {
        String accessToken = authorizedClient.getAccessToken().getTokenValue();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);

        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            HttpMethod.GET,
            request,
            String.class
        );

        return response.getBody();
    }
}
`}
                        </code>
                    </pre>
                </div>
            </div>
        </PageTemplate>
    );
}