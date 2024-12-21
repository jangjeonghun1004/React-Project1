import TimeLine from "../shared/timeLine/TimeLine";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";

function Career() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <section>
                        <header className="main">
                            <h1>경력(Career)</h1>
                        </header>

                        {/* contents */}
                        <TimeLine />
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Career;