import CardStyle1 from "../../shared/card/CardStyle1"

function EratLacinia() {
    return (
        <section>
            <header className="major">
                <h2>React 학습 내용</h2>
            </header>
            <div className="features">
                <CardStyle1 
                    icon="icon fa-gem" 
                    title="useState"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-paper-plane"
                    title="useReducer"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-rocket"
                    title="Quam lorem ipsum"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                 <CardStyle1
                    icon="icon solid fa-signal"
                    title="Sed magna finibus"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
            </div>
        </section>
    );
}

export default EratLacinia