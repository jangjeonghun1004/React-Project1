import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function SpringDataJdbc() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>Spring Data JDBC</h1>
                        </header>

                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                        {/* contents */}
                        <h2 id="content">Spring Data JDBC란?</h2>
                        <p>
                            Spring Data JDBC는 간단하고 가볍게 데이터 액세스 계층을 개발할 수 있도록 지원하는 Spring Data 프로젝트의 한 부분입니다. 
                            JPA와 비슷한 기능을 제공하지만, JDBC의 간단한 접근 방식을 기반으로 동작하며, 복잡한 ORM 기능은 제공하지 않습니다. 데이터베이스와의 매핑은 직접적이며, 
                            설계가 단순한 애플리케이션에 적합합니다.
                        </p>

                        <h2 id="content">주요 특징</h2>
                        <ul>
                            <li>JDBC 기반: 직접적인 SQL과 데이터 매핑을 합니다.</li>
                            <li>단순성: 관계형 데이터베이스와 객체를 간단히 매핑합니다.</li>
                            <li>트랜잭션 지원: Spring의 트랜잭션 관리와 통합을 제공합니다.</li>
                            <li>Repository 인터페이스: 데이터베이스 작업을 위한 CRUD 메서드를 제공합니다.</li>
                        </ul>

                        <h2>의존성 추가</h2>
                        <div>
                            <pre>
                                <code>
{`
<dependencies>
    <!-- Spring Boot Starter Data JDBC -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jdbc</artifactId>
    </dependency>

    <!-- H2 Database (in-memory database) -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3>1. 엔티티 클래스 정의</h3>
                            <pre>
                                <code>
{`
import org.springframework.data.annotation.Id;

public class Product {
    @Id
    private Long id;
    private String name;
    private double price;

    // Getters and Setters
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
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
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3>3. Service 클래스 정의</h3>
                            <pre>
                                <code>
{`
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Product createProduct(String name, double price) {
        Product product = new Product();
        product.setName(name);
        product.setPrice(price);
        return repository.save(product);
    }

    public Iterable<Product> getAllProducts() {
        return repository.findAll();
    }
}
`}
                                </code>
                            </pre>
                        </div>

                        <div>
                            <h3>4. Controller 클래스 정의</h3>
                            <pre>
                                <code>
{`
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping
    public Product createProduct(@RequestParam String name, @RequestParam double price) {
        return service.createProduct(name, price);
    }

    @GetMapping
    public Iterable<Product> getAllProducts() {
        return service.getAllProducts();
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