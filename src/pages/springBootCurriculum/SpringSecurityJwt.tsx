import PageTemplate from "../PageTemplate";

export default function SpringSecurityJwt() {
    return (
        <PageTemplate>
            <h2>Spring Security JWT</h2>
            <p className="box">
                Spring Security JWT는 JSON Web Token(JWT)을 활용한 인증 및 권한 부여를 처리하는 데 사용됩니다.
                JWT는 클라이언트와 서버 간에 보안을 유지하며 인증 정보를 전송하는 데 널리 사용됩니다.
            </p>

            <h2>Spring Security JWT 주요 기능</h2>
            <ul>
                <li>로그인 시 JWT 발급.</li>
                <li>요청 헤더에 포함된 JWT 검증.</li>
                <li>사용자 권한에 따른 요청 처리.</li>
            </ul>

            <h2>Spring Security JWT 발급 프로세스</h2>
            <ol>
                <li>회원 인증 요청: 클라이언트가 서버로 사용자 인증 정보를 보냅니다(예: 사용자 이름과 비밀번호).</li>
                <li>사용자 정보 검증: 서버는 데이터베이스나 기타 저장소에서 사용자 정보를 조회하여 제공된 인증 정보가 올바른지 확인합니다.</li>
                <li>JWT 생성 및 발급: 인증에 성공하면 서버는 JWT를 생성하여 클라이언트에 반환합니다. 이 토큰은 클라이언트가 서버에 다시 인증 정보를 보내지 않고도 인증 상태를 유지하도록 도와줍니다.</li>
                <li>클라이언트 저장: 클라이언트는 이 토큰을 저장합니다(예: 브라우저의 localStorage, sessionStorage, 또는 쿠키).</li>
                <li>인증된 요청: 클라이언트는 이후 요청 시 Authorization 헤더에 토큰을 포함하여 서버로 보냅니다.</li>
                <li>서버에서 토큰 검증: 서버는 이 토큰을 검증하여 유효한지 확인하고, 필요한 경우 사용자 권한을 확인합니다.</li>
            </ol>

            <div>
                <h3>Spring Security JWT 의존성 추가</h3>
                <pre>
                    <code>
                        {`
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>

`}
                    </code>
                </pre>
            </div>

            <div>
                <h3>1. JWT 유틸 클래스</h3>
                <pre>
                    <code>
                        {`
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

public class JwtUtil {
    private final String SECRET_KEY = "your_secret_key";

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10시간 유효
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean validateToken(String token, String username) {
        return username.equals(extractUsername(token)) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }
}
`}
                    </code>
                </pre>
            </div>

            <div>
                <h3>2. JWT 필터</h3>
                <pre>
                    <code>
                        {`
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String token = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(token);
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            if (jwtUtil.validateToken(token, userDetails.getUsername())) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        chain.doFilter(request, response);
    }
}
`}
                    </code>
                </pre>
            </div>

            <div>
                <h3>3. Spring Security 설정</h3>
                <pre>
                    <code>
                        {`
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtFilter jwtFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/authenticate").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http, PasswordEncoder passwordEncoder) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsService())
                .passwordEncoder(passwordEncoder)
                .and()
                .build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> new org.springframework.security.core.userdetails.User(
                "user",
                passwordEncoder().encode("password"),
                new ArrayList<>()
        );
    }
}
`}
                    </code>
                </pre>
            </div>

            <div>
                <h3>4. JWT 토큰 발급</h3>
                <pre>
                    <code>
                        {`
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        return jwtUtil.generateToken(authRequest.getUsername());
    }
}

class AuthRequest {
    private String username;
    private String password;

    // Getter, Setter
}
`}
                    </code>
                </pre>
            </div>
        </PageTemplate>
    );
}