import Header from "../../widgets/header/Header";
import Sidebar from "../Sidebar";

export default function SpringFrameworkAsync() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>
                        <header className="main">
                            <h1>StringFramework ASYNC</h1>
                        </header>

                        <span className="image main"><img src={`${import.meta.env.BASE_URL}images/img01.jpeg`} style={{ height: 300 }} alt="image" /></span>

                        {/* contents */}
                        <h2 id="content">ASYNC란?</h2>
                        <p>{`Callable<T>, DeferredResult<T>, 그리고 CompletableFuture<T>는 비동기 프로그래밍과 관련된 다양한 시나리오에서 사용됩니다.`}</p>

                        <h2>{`Callable<T>`}</h2>
                        <ol>
                            <li>Java에서 제공하는 인터페이스로, 비동기 작업을 수행한 후 결과를 반환하는 데 사용됩니다.</li>
                            <li>Spring MVC에서 컨트롤러 메서드의 반환 타입으로 사용할 수 있으며, 작업이 완료될 때 결과를 반환합니다.</li>
                            <li>스레드 풀에서 실행될 작업을 정의합니다.</li>
                        </ol>

                        <div>
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.Callable;

@RestController
public class CallableController {

    @GetMapping("/callable")
    public Callable<String> getCallable() {
        return () -> {
            // Simulate a long-running task
            Thread.sleep(2000);
            return "Callable result";
        };
    }

    @GetMapping("/weather")
    public Callable<String> getWeather() {
        return () -> {
            // 외부 API 호출 (예: 날씨 정보)
            Thread.sleep(2000); // API 응답 대기 시뮬레이션
            return "Sunny, 25°C";
        };
    }
}
`}
                                </code>
                            </pre>
                        </div>

                        <h2>{`DeferredResult<T>`}</h2>
                        <ol>
                            <li>Spring MVC에서 비동기 요청 처리를 위한 더 유연한 방법을 제공합니다.</li>
                            <li>작업의 결과를 컨트롤러 외부에서 설정이 가능합니다.</li>
                            <li>외부 이벤트(예: 다른 스레드, 서비스 호출)로 결과를 설정할 수 있습니다.</li>
                            <li>시간 초과 및 에러 처리를 위한 콜백을 지원합니다.</li>
                        </ol>

                        <div>
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@RestController
public class DeferredResultController {

    private final ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);

    @GetMapping("/deferred")
    public DeferredResult<String> getDeferredResult() {
        DeferredResult<String> result = new DeferredResult<>(5000L, "Timeout occurred");
        
        executor.schedule(() -> result.setResult("DeferredResult result"), 2, TimeUnit.SECONDS);
        
        return result;
    }

    @GetMapping("/notification")
    public DeferredResult<String> getNotification() {
        DeferredResult<String> result = new DeferredResult<>(5000L, "No notification");

        // 메시지 큐 또는 외부 이벤트로부터 알림 수신 (비동기 처리)
        new Thread(() -> {
            try {
                Thread.sleep(2000); // 메시지 대기 시뮬레이션
                result.setResult("New Notification Received!");
            } catch (InterruptedException e) {
                result.setErrorResult("Error occurred");
            }
        }).start();

        return result;
    }
}
`}
                                </code>
                            </pre>
                        </div>

                        <h2>{`CompletableFuture<T>`}</h2>
                        <ol>
                            <li>Java 8에서 도입된 완전한 비동기 작업 지원 클래스입니다.</li>
                            <li>비동기 작업 체이닝 (thenApply, thenCompose)</li>
                            <li>병렬 처리 (allOf, anyOf)</li>
                            <li>비동기 실행 (supplyAsync, runAsync)</li>
                        </ol>

                        <div>
                            <h3>예제 코드</h3>
                            <pre>
                                <code>
{`
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
public class CompletableFutureController {

    @GetMapping("/completable")
    public CompletableFuture<String> getCompletableFuture() {
        return CompletableFuture.supplyAsync(() -> {
            // Simulate a long-running task
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return "CompletableFuture result";
        });
    }

    @GetMapping("/aggregated-data")
    public CompletableFuture<String> getAggregatedData() {
        CompletableFuture<String> serviceA = CompletableFuture.supplyAsync(() -> {
            // 외부 서비스 A 호출
            try { Thread.sleep(2000); } catch (InterruptedException e) {}
            return "Service A Data";
        });

        CompletableFuture<String> serviceB = CompletableFuture.supplyAsync(() -> {
            // 외부 서비스 B 호출
            try { Thread.sleep(3000); } catch (InterruptedException e) {}
            return "Service B Data";
        });

        return serviceA.thenCombine(serviceB, (a, b) -> "Aggregated Result: " + a + ", " + b);
    }
}
`}
                                </code>
                            </pre>
                        </div>

                        <h2>주요 차이점 비교</h2>
                        <div className="table-wrapper">
                            <table className="alt">
                                <thead>
                                    <tr>
                                        <th>특징</th>
                                        <th>{`Callable<T>`}</th>
                                        <th>{`DeferredResult<T>`}</th>
                                        <th>{`CompletableFuture<T>`}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>기본 제공 여부</td>
                                        <td>Java 기본 제공</td>
                                        <td>Spring MVC에서 제공</td>
                                        <td>Java 8부터 기본 제공</td>
                                    </tr>
                                    <tr>
                                        <td>작업 정의 위치</td>
                                        <td>작업은 Callable 내부에서 정의</td>
                                        <td>외부 스레드에서 결과 설정 가능</td>
                                        <td>작업 체이닝 및 병렬 처리 가능</td>
                                    </tr>
                                    <tr>
                                        <td>타임아웃 및 에러 핸들링</td>
                                        <td>Spring에서 기본 제공</td>
                                        <td>콜백으로 핸들링 가능</td>
                                        <td>예외 체이닝 및 콜백 지원</td>
                                    </tr>
                                    <tr>
                                        <td>주 사용 시나리오</td>
                                        <td>간단한 비동기 작업</td>
                                        <td>외부 이벤트 기반 비동기 작업</td>
                                        <td>복잡한 비동기/병렬 작업</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>주요 사용 사례</h2>
                        <div className="table-wrapper">
                            <table className="alt">
                                <tbody>
                                    <tr>
                                        <td>{`Callable<T>`}</td>
                                        <td>{`DeferredResult<T>`}</td>
                                        <td>{`CompletableFuture<T>`}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            - 외부 API 호출<br/>
                                            - 오래 걸리는 데이터베이스 쿼리<br/>
                                            - 단순 비동기 작업
                                        </td>
                                        <td>
                                            - 메시지 큐 기반 작업<br/>
                                            - 외부 이벤트 기반 처리<br/>
                                            - 장시간 대기 작업
                                        </td>
                                        <td>
                                            - 여러 외부 API 병렬 호출<br/>
                                            - 데이터 집계 및 분석<br/>
                                            - 복잡한 비동기 워크플로우
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}