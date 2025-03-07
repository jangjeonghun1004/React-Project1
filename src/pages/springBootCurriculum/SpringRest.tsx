import PageTemplate from "../PageTemplate";

export default function SpringRest() {
    return (
        <PageTemplate>
            <h2>Spring REST</h2>
            <p className="box">
                Spring REST는 Spring Framework에서 제공하는 RESTful 웹 서비스를 개발하기 위한 강력한 도구입니다.
                REST(Representational State Transfer)는 HTTP를 기반으로 리소스를 관리하고 조작하는 아키텍처 스타일입니다.
                REST API는 주로 클라이언트와 서버 간의 데이터 교환에 사용됩니다.
            </p>

            <h2>REST API</h2>
            <ul>
                <li>RESTful 엔드포인트 개발: @RestController와 @RequestMapping을 사용합니다.</li>
                <li>JSON 요청/응답: 기본적으로 Jackson을 사용해 객체를 JSON으로 직렬화/역직렬화 합니다.</li>
                <li>HTTP 메서드: GET, POST, PUT, DELETE 등 다양한 HTTP 메서드를 지원합니다.</li>
            </ul>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>예제 코드(@GetMapping)</h3>
                    <pre>
                        <code>
                            {`
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetMappingExampleController {
    // HTTP GET 요청을 처리하는 메서드에 사용합니다.
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, GET request!";
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
GET /hello
Response: "Hello, GET request!"
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostMappingExampleController {
    // HTTP POST 요청을 처리하는 메서드에 사용합니다.
    @PostMapping("/submit")
    public String handlePost() {
        return "Received POST data:";
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
POST /submit
Content-Type: application/x-www-form-urlencoded
Body: 
Response: "Received POST data:"
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestParamExampleController {

    @GetMapping("/search")
    public String search(@RequestParam String keyword, @RequestParam(required = false, defaultValue = "10") int limit) {
        // URL의 쿼리 파라미터를 매핑하는 데 사용합니다.
        return "Searching for: " + keyword + ", Limit: " + limit;
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
GET /search?keyword=Alice
Response: "Searching for: Alice, Limit: 10"
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestBodyExampleController {
    @PostMapping("/user")
    public String createUser(@RequestBody User user) {
        // 요청 본문(JSON 데이터 등)을 객체로 매핑하는 데 사용합니다.
        return "User created: " + user.toString();
    }
}

// DTO 클래스
class User {
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
POST /user
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PathVariableExampleController {
    // URL 경로의 변수 값을 매핑하는 데 사용합니다.
    @GetMapping("/user/{id}")
    public String getUserById(@PathVariable int id) {
        return "User ID: " + id;
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
GET /user/myid
Response: "User ID: myid"
`}
                        </code>
                    </pre>
                </div>
            </div>
        </PageTemplate>
    );
}