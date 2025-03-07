import PageTemplate from "../PageTemplate";

export default function DockerContainer() {
  return (
    <PageTemplate>
      <h2>Docker Container</h2>
      <div className="box">
        Docker Image를 실행하여 생성된 가상 환경입니다.
      </div>

      <h2>Docker Container 특징</h2>
      <ul>
        <li>컨테이너는 독립된 애플리케이션 실행 환경을 제공합니다.</li>
        <li>컨테이너는 이미지의 읽기 전용 계층 위에 쓰기 가능한 계층을 추가해 동작합니다.</li>
      </ul>

      <h2>Docker Container 명령어</h2>
      <pre>
        <code>{`
// 컨테이너를 생성하지만 실행하지는 않습니다.
% docker create [OPTIONS] IMAGE [COMMAND] [ARG...]

  OPTIONS: 컨테이너 설정을 위한 다양한 옵션 (예: 포트 매핑, 볼륨 마운트 등)
  IMAGE: 컨테이너를 생성할 Docker 이미지 이름
  COMMAND: 컨테이너 내부에서 실행할 명령어
  ARG...: 명령어에 전달할 인자
                `}</code>
        <br />
        <code>{`
// 컨테이너를 생성하고 실행합니다. (docker create + docker start 와 같습니다)
% docker run [OPTIONS] IMAGE [COMMAND] [ARG...]: 

  OPTIONS: 컨테이너 설정을 위한 다양한 옵션 (예: 포트 매핑, 볼륨 마운트 등)
  IMAGE: 컨테이너를 생성할 Docker 이미지 이름
  COMMAND: 컨테이너 내부에서 실행할 명령어
  ARG...: 명령어에 전달할 인자

// 예시 
% docker run -d --name my-container -p 8080:80 nginx (-d 옵션은 백그라운드 실행)

  -d : detach, 컨테이너를 백그라운드에서 실행
  --name : 컨테이너 이름 지정
  -p : port, 호스트와 컨테이너 포트 연결
                `}</code>
        <br />
        <code>{`
// 중지된 컨테이너를 시작합니다.
% docker start [OPTIONS] CONTAINER

  CONTAINER: 시작할 컨테이너의 ID 또는 이름
  예시: docker start my-container

// 실행 중인 컨테이너를 중지합니다.
% docker stop [OPTIONS] CONTAINER

  CONTAINER: 중지할 컨테이너의 ID 또는 이름
  예시: docker stop my-container

// 실행 중인 컨테이너를 재시작합니다.
% docker restart [OPTIONS] CONTAINER

  CONTAINER: 재시작할 컨테이너의 ID 또는 이름
  예시: docker restart my-container

// 실행 중인 컨테이너를 일시 중지합니다. (컨테이너 내부 프로세스를 중단)
% docker pause [OPTIONS] CONTAINER: 

  CONTAINER: 일시 중지할 컨테이너의 ID 또는 이름
  예시: docker pause my-container

// 일시 중지된 컨테이너를 다시 실행합니다.
% docker unpause [OPTIONS] CONTAINER: 

  CONTAINER: 다시 실행할 컨테이너의 ID 또는 이름
  예시: docker unpause my-container

// 실행 중인 컨테이너를 강제로 종료합니다. (docker stop과 달리 즉시 종료)
% docker kill [OPTIONS] CONTAINER

  CONTAINER: 강제 종료할 컨테이너의 ID 또는 이름
  예시: docker kill my-container
                `}</code>
        <br />
        <code>{`
// 실행 중인 컨테이너 목록을 표시합니다.
% docker ps [OPTIONS]

  -a: 모든 컨테이너 목록 (실행 중이지 않은 컨테이너 포함)
  예시: docker ps, docker ps -a
                `}</code>
        <br />
        <code>{`
// 컨테이너를 삭제합니다. 
// 실행 중인 컨테이너는 먼저 중지해야 합니다.
% docker rm [OPTIONS] CONTAINER

  -f: 실행 중인 컨테이너를 강제로 삭제
  예시: docker rm my-container, docker rm -f my-container
                `}</code>
      </pre>
    </PageTemplate>
  );
}