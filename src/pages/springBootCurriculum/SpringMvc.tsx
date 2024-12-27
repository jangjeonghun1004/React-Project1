import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function SpringMvc() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>Spring MVC</h1>
                        </header>

                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                        {/* contents */}
                        <h2 id="content">Spring MVC란?</h2>
                        <p>Spring MVC는 Spring Framework의 웹 애플리케이션 개발을 위한 핵심 구성 요소 중 하나로, Model-View-Controller 패턴을 기반으로 구조화된 애플리케이션 개발을 지원합니다.</p>

                        <h2 id="content">MVC</h2>
                        <ol>
                            <li>Model: 애플리케이션의 데이터와 비즈니스 로직을 담당합니다.</li>
                            <li>View: 사용자 인터페이스를 표현하며, 보통 HTML, JSP 또는 Thymeleaf 같은 템플릿 엔진을 사용합니다.</li>
                            <li>Controller: 사용자의 요청을 처리하고 적절한 응답(View 또는 데이터)을 반환합니다.</li>
                        </ol>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(@GetMapping)</h3>
                                <pre>
                                    <code>
{`
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/example")
public class ExampleController {
    @GetMapping("/greeting") // HTTP GET 요청을 처리하는 메서드에 사용합니다.
    public String greeting(Model model) {
        model.addAttribute("message", "Hello, Spring MVC!");
        return "greeting"; // View name (e.g., greeting.html)
    }
}
`}
                                    </code>
                                </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>사용 예시</h3>
                                <pre>
                                    <code>
{`
GET /example/greeting
`}
                                    </code>
                                </pre>
                                <p></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(@PostMapping)</h3>
                                <pre>
                                    <code>
{`
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/example")
public class ExampleController {
    @PostMapping("/submit") // HTTP POST 요청을 처리하는 메서드에 사용합니다.
    public String submitForm(Model model) {
        model.addAttribute("message", "Form submitted by:");
        return "result"; // View name (e.g., result.html)
    }
}
`}
                                    </code>
                                </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>사용 예시</h3>
                                <pre>
                                    <code>
{`
POST /example/submit
Content-Type: application/x-www-form-urlencoded
Body: 
Response: "Form submitted by:"
`}
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(@RequestParam)</h3>
                                <pre>
                                    <code>
{`
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/example")
public class ExampleController {
    @GetMapping("/query")
    public String queryParam(@RequestParam(name = "keyword", required = false, defaultValue = "Spring") String keyword,
                             Model model
    ) {
        // URL의 쿼리 파라미터를 매핑하는 데 사용합니다.
        model.addAttribute("message", "You searched for: " + keyword);
        return "queryResult"; // View name (e.g., queryResult.html)
    }
}
`}
                                    </code>
                                </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>사용 예시</h3>
                                <pre>
                                    <code>
{`
GET /example?keyword=Alice
Response: "You searched for: Alice"
`}
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(@RequestBody)</h3>
                                <pre>
                                    <code>
{`
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/example")
public class ExampleController {
    @PostMapping("/json")
    public String handleJson(@RequestBody UserDto userDto) {
        // 요청 본문(JSON 데이터 등)을 객체로 매핑하는 데 사용합니다.
        return "Received User: " + userDto.toString();
    }
}

// DTO 클래스
class UserDto {
    private String name;
    private int age;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{name='" + name + "', age=" + age + "}";
    }
}
`}
                                    </code>
                                </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>사용 예시</h3>
                                <pre>
                                <code>
{`
POST /example/json
Content-Type: application/x-www-form-urlencoded
Body: age=25&name=james
Response: "User created: User{name='james', age=25}"
`}
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-12-small">
                                <h3>예제 코드(@PathVariable)</h3>
                                <pre>
                                    <code>
{`
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/example")
public class ExampleController {
    // URL 경로의 변수 값을 매핑하는 데 사용합니다.
    @GetMapping("/user/{id}")
    public String getUserById(@PathVariable int id, Model model) {
        model.addAttribute("message", "User ID: " + id);
        return "userDetail"; // View name (e.g., userDetail.html)
    }
}
`}
                                    </code>
                                </pre>
                            </div>
                            <div className="col-6 col-12-small">
                                <h3>사용 예시</h3>
                                <pre>
                                <code>
{`
GET /example/user/myid
Response: "User ID: myid"
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