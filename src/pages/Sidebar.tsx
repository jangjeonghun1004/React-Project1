import { useEffect, useState } from "react";
import AnteInterdum from "../widgets/anteInterdum/AnteInterdum";
import CopyRight from "../widgets/copyRight/CopyRight";
import GetInTouch from "../widgets/getInTouch/GetInTouch";
import Menu from "../widgets/menu/Menu";
import Search from "../widgets/search/Search";

function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleResize = () => {
        const width = window.innerWidth;

        if(width < 768) {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        // 클린업: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="sidebar" >
            <h1>{String(isMenuOpen)}</h1>
            <div className="inner">
                <Search />
                <Menu />
                <AnteInterdum />
                <GetInTouch />
                <CopyRight />
            </div>
            <a href="#sidebar" className="toggle" onClick={handleToggleMenu} >Toggle</a>
        </div>
    );
}

export default Sidebar;