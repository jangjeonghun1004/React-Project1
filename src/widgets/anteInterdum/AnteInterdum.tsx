
function AnteInterdum() {
    return (
        <section>
            <header className="major">
                <h2>Developer tools</h2>
            </header>

            <ul className="contact">
                <li className="icon solid fa-link"><a href="https://www.jetbrains.com/idea/" target="blank">IntelliJ</a></li>
                <li className="icon solid fa-link"><a href="https://visualstudio.microsoft.com/ko/" target="blank">Visual Studio</a></li>
                <li className="icon solid fa-link"><a href="https://visualstudio.microsoft.com/ko/" target="blank">Visual Studio Code</a></li>
                <li className="icon solid fa-link"><a href="https://www.docker.com/" target="blank">Docker</a></li>
                <li className="icon solid fa-link"><a href="https://github.com/" target="blank">Github</a></li>
            </ul>

            {/* 광고 배너로 사용할 예정.
            <div className="mini-posts">
                <article>
                    <a href="https://www.jetbrains.com/idea/" target="blank" className="image">
                        <img src={`${import.meta.env.BASE_URL}images/intellij.jpeg`} style={{ height: "141px" }} alt="" />
                    </a>
                    <p style={{textAlign:"center"}}></p>
                </article>
            </div> */}
        </section>
    );
}

export default AnteInterdum