import PageTemplate from "../PageTemplate";

export default function Lombok() {
    return (
        <PageTemplate>
            <h2>Lombok</h2>
            <p className="box">
                Lombok은 Java에서 반복적인 코드 작성을 줄이고 생산성을 높이는 라이브러리입니다.
                Spring Boot 프로젝트에서 Lombok을 사용하면, 특히 getter, setter, toString, equals, hashCode 등의 메서드를 자동으로 생성할 수 있습니다.
                또한, 빌더 패턴, 로그 생성 등 다양한 유용한 기능도 제공합니다.
            </p>

            <h2>Lombok 의존성 추가</h2>
            <pre>
                <code>
                    {`
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version> <!-- 최신 버전 확인 -->
    <scope>provided</scope>
</dependency>
`}
                </code>
            </pre>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>예제 코드(@Getter, @Setter)</h3>
                    <pre>
                        <code>
                            {`
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private Long id;
    private String name;
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
User user = new User();
user.setId(1L);
user.setName("John Doe");

System.out.println(user.getName()); // 출력: John Doe
`}
                        </code>
                    </pre>
                </div>
            </div>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>예제 코드(@ToString)</h3>
                    <pre>
                        <code>
                            {`
import lombok.ToString;

@ToString
public class User {
    private Long id;
    private String name;
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
User user = new User();
user.setId(1L);
user.setName("Jane Doe");

System.out.println(user); // 출력: User(id=1, name=Jane Doe)
`}
                        </code>
                    </pre>
                </div>
            </div>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>예제 코드(@NoArgsConstructor, @AllArgsConstructor, @RequiredArgsConstructor)</h3>
                    <pre>
                        <code>
                            {`
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class User {
    private Long id;
    @NonNull
    private String name;
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
User user1 = new User(); // NoArgsConstructor 사용
User user2 = new User("Jane Doe"); // RequiredArgsConstructor 사용
User user3 = new User(1L, "John Doe"); // AllArgsConstructor 사용
`}
                        </code>
                    </pre>
                    <ul>
                        <li>@NoArgsConstructor: 기본 생성자 생성</li>
                        <li>@AllArgsConstructor: 모든 필드에 대한 생성자 생성</li>
                        <li>@RequiredArgsConstructor: final 필드나 @NonNull 필드만 포함한 생성자 생성</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>예제 코드(@Builder)</h3>
                    <pre>
                        <code>
                            {`
import lombok.Builder;

@Builder
public class User {
    private Long id;
    private String name;
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
User user = User.builder()
                .id(1L)
                .name("John Doe")
                .build();

System.out.println(user);
`}
                        </code>
                    </pre>
                </div>
            </div>

            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>예제 코드(@Data)</h3>
                    <pre>
                        <code>
                            {`
import lombok.Data;

@Data
public class User {
    private Long id;
    private String name;
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
User user = new User();
user.setId(1L);
user.setName("Jane Doe");

System.out.println(user); // 출력: User(id=1, name=Jane Doe)
`}
                        </code>
                    </pre>
                    <p>@Data는 @Getter, @Setter, @ToString, @EqualsAndHashCode, @RequiredArgsConstructor를 모두 포함한 종합적인 어노테이션입니다.</p>
                </div>
            </div>
        </PageTemplate>
    );
}