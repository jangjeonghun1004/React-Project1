import PageTemplate from "../PageTemplate";

export default function Docker() {
    return (
        <PageTemplate title="Deploying" subTitle="Docker" imageSrc="img01.jpeg">
            <h2>Docker란?</h2>
            <div className="box">
                <p>
                    Docker는 애플리케이션을 컨테이너라는 단위로 패키징, 배포, 실행하는 플랫폼입니다.
                    컨테이너는 독립된 환경에서 애플리케이션을 실행할 수 있도록 경량화된 가상화를 제공합니다.
                </p>
            </div>


        </PageTemplate>
    );
}

