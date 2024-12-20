import SubMenu from "./SubMenu";

function Menu() {
    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li><a href="index.html">Homepage</a></li>
                <li><a href="generic.html">Generic</a></li>
                <li><a href="elements.html">Elements</a></li>
                <SubMenu title="Submenu">
                    <li><a href="#">Lorem Dolor</a></li>
                    <li><a href="#">Ipsum Adipiscing</a></li>
                    <li><a href="#">Tempus Magna</a></li>
                    <li><a href="#">Feugiat Veroeros</a></li>
                </SubMenu>
                <li><a href="#">Etiam Dolore</a></li>
                <li><a href="#">Adipiscing</a></li>
                <SubMenu title="Another Submenu">
                    <li><a href="#">Lorem Dolor</a></li>
                    <li><a href="#">Ipsum Adipiscing</a></li>
                    <li><a href="#">Tempus Magna</a></li>
                    <li><a href="#">Feugiat Veroeros</a></li>
                </SubMenu>
                <li><a href="#">Maximus Erat</a></li>
                <li><a href="#">Sapien Mauris</a></li>
                <li><a href="#">Amet Lacinia</a></li>
            </ul>
        </nav>
    );
}

export default Menu