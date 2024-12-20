import CardStyle1 from "../../shared/card/CardStyle1"

function EratLacinia() {
    return (
        <section>
            <header className="major">
                <h2>Erat lacinia</h2>
            </header>
            <div className="features">
                <CardStyle1 
                    icon="icon fa-gem" 
                    title="Portitor ullamcorper"
                    text="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
                />
                <CardStyle1
                    icon="icon solid fa-paper-plane"
                    title="Sapien veroeros"
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