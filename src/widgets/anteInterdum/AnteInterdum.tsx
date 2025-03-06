
function AnteInterdum() {
    return (
        <section>
            <header className="major">
                <h2>Developer tools</h2>
            </header>
            <div className="mini-posts">
                <article>
                    <a href="https://www.jetbrains.com/idea/" target="blank" className="image">
                        <img src={`${import.meta.env.BASE_URL}images/intellij.jpeg`} style={{ height: "141px" }} alt="" />
                    </a>
                    <p style={{textAlign:"center"}}>IntelliJ</p>
                </article>
                <article>
                    <a href="https://visualstudio.microsoft.com/ko/" target="blank" className="image">
                        <img src={`${import.meta.env.BASE_URL}images/visualstudio.jpeg`} style={{ height: "141px" }} alt="" />
                    </a>
                    <p style={{textAlign:"center"}}>Visual Studio</p>
                </article>
                <article>
                    <a href="https://visualstudio.microsoft.com/ko/" target="blank" className="image">
                        <img src={`${import.meta.env.BASE_URL}images/visualstudiocode.jpeg`} style={{ height: "141px" }} alt="" />
                    </a>
                    <p style={{textAlign:"center"}}>Visual Studio Code</p>
                </article>
                <article>
                    <a href="https://www.docker.com/" target="blank" className="image">
                        <img src={`${import.meta.env.BASE_URL}images/docker.jpeg`} style={{ height: "141px" }} alt="" />
                    </a>
                    <p style={{textAlign:"center"}}>Docker</p>
                </article>
                <article>
                    <a href="https://github.com/" target="blank" className="image">
                        <img src={`${import.meta.env.BASE_URL}images/github.png`} style={{ height: "141px" }} alt="" />
                    </a>
                    <p style={{textAlign:"center"}}>Github</p>
                </article>
            </div>
        </section>
    );
}

export default AnteInterdum