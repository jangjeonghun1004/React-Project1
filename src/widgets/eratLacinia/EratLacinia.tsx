import CardStyle1 from "../../shared/card/CardStyle1"

function EratLacinia() {
    return (
        <section>
            <header className="major">
                <h2>React 학습 내역</h2>
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
                    title="useContext"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-signal"
                    title="useEffect"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />

                <CardStyle1
                    icon="icon fa-gem"
                    title="useRef"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-paper-plane"
                    title="BrowserRouter"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-rocket"
                    title="Props"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-signal"
                    title="Recoil"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />

                <CardStyle1
                    icon="icon solid fa-gavel"
                    title="Optimization"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-gas-pump"
                    title="ETC"
                    text="CustomHook, CSS, Event"
                />
            </div>
        </section>
    );
}

export default EratLacinia