import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function SpringJpa() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>Spring JPA</h1>
                        </header>

                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                        {/* contents */}
                        <h2>Spring JPA란?</h2>
                        <p>
                            Spring Data JPA는 JPA(Java Persistence API)를 기반으로 데이터베이스와의 상호작용을 간소화하기 위해 제공되는 Spring 프로젝트입니다. 
                            개발자는 SQL을 직접 작성하지 않고도 객체 지향적으로 데이터를 관리하고 처리할 수 있습니다.
                        </p>

                        <h2>주요 특징</h2>
                        <ul>
                            <li>CRUD 메서드 자동 생성: 기본적인 데이터베이스 연산을 위한 메서드 제공합니다.</li>
                            <li>Query Method: 메서드 이름으로 쿼리 생성할 수 있습니다.</li>
                            <li>JPQL 및 네이티브 쿼리: 복잡한 쿼리 작성이 가능합니다.</li>
                            <li>페이징 및 정렬 지원: 데이터를 페이지 단위로 처리하고 정렬 가능합니다.</li>
                        </ul>

                        <div>
                            <h3>1. 엔티티 클래스 정의</h3>
                            <pre>
                                <code>
{`
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // Getter & Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3>2. Repository 인터페이스 정의</h3>
                            <pre>
                                <code>
{`
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Query Method 예시
    User findByEmail(String email);
}
`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3>3. 서비스 계층</h3>
                            <pre>
                                <code>
{`
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3>4. 컨트롤러</h3>
                            <pre>
                                <code>
{`
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id).orElse(null);
    }

    @GetMapping("/search")
    public User getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
`}
                                </code>
                            </pre>
                        </div>

                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}