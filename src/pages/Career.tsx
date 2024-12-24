import TimeLine from "../shared/timeLine/TimeLine";
import Header from "../widgets/header/Header";
import Sidebar from "./Sidebar";
import BounceEmoji from "../shared/BounceEmoji";

function Career() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <section>
                        <header className="main">
                            <h1>이력서</h1>
                        </header>

                        {/* contents */}
                        <TimeLine />
                        <BounceEmoji />
                    </section>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}

export default Career;