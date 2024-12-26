import ComponentC from "./ComponentC";

function ComponentB() {
    return (
        <div style={{ borderWidth: 2, borderStyle: "solid", borderColor: 'green', padding: 10 }}>
            Component B
            <ComponentC />
        </div>
    );
}

export default ComponentB