import { useEffect, useState } from "react";
import AnteInterdum from "../widgets/anteInterdum/AnteInterdum";
import CopyRight from "../widgets/copyRight/CopyRight";
import GetInTouch from "../widgets/getInTouch/GetInTouch";
import Menu from "../widgets/menu/Menu";
import Search from "../widgets/search/Search";

function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const handleResize = (isInit: boolean) => {
        if(window.innerWidth < 768) {
            if(isInit) {
                setIsMenuOpen(false);
            } 
            if(!isInit && windowWidth != window.innerWidth) {
                setIsMenuOpen(false);
            }
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        handleResize(true);

        window.addEventListener('resize',  () => handleResize(false));

        // 클린업: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', () => handleResize(false));
        };
    }, []);

    return (
        <div id="sidebar" className={isMenuOpen ? '' : 'inactive'}>
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