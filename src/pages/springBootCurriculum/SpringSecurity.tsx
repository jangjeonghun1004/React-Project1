import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function SpringSecurity() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    {/* 
                    
                    SecurityFilterChain
                    PasswordEncoder 
                    
                    */}
                    <section>
                        <header className="main">
                            <h1>Spring Security</h1>
                        </header>

                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                        {/* contents */}
                        <h2 id="content">Spring Security란?</h2>
                        <p>
                            Spring Security는 애플리케이션의 인증(Authentication)과 권한 부여(Authorization)를 관리하는 강력한 프레임워크입니다.         
                        </p>

                        <h2 id="content">주요 기능</h2>
                        <ol>
                            <li>인증(Authentication): 사용자의 신원을 확인합니다.</li>
                            <li>권한 부여(Authorization): 사용자가 리소스에 접근할 수 있는 권한이 있는지 확인합니다.</li>
                            <li>보안 필터 체인(Security Filter Chain): HTTP 요청을 처리하기 전에 인증 및 권한 부여를 적용합니다.</li>
                            <li>OAuth2 및 JWT 지원: 현대적인 인증 방식과 통합.</li>
                            <li>기본 보안 설정: 간단한 설정만으로 강력한 보안을 제공합니다.</li>
                        </ol>

                        <h2>의존성 추가</h2>
                        <div>
                        <pre>
                            <code>
{`
<dependencies>
    <!-- Spring Security -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>

    <!-- Spring Security Test (Optional: 테스트용) -->
    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
`}
                            </code>
                        </pre>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h3>예제 코드</h3>
                                <pre>
                                    <code>
{`
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // CSRF 보호 비활성화 (필요 시 활성화)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll() // /public/**는 인증 없이 접근 가능
                .requestMatchers("/admin/**").hasRole("ADMIN") // /admin/**는 ADMIN 역할 필요
                .anyRequest().authenticated() // 나머지는 인증 필요
            )
            .formLogin(withDefaults()) // 기본 로그인 폼 사용
            .logout(logout -> logout.permitAll()); // 로그아웃 설정
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withUsername("user")
            .password(passwordEncoder().encode("password"))
            .roles("USER")
            .build();

        UserDetails admin = User.withUsername("admin")
            .password(passwordEncoder().encode("admin123"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}