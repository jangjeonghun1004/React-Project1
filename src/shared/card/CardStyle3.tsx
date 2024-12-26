import { useState } from "react";
import styles from './CardStyle3.module.css'
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../app/ScreenSizeProvider";

interface Props {
    icon?: string,
    title?: string,
    text?: string,
    linkPath?: string
}

function CardStyle3({ icon = 'icon fa-gem', title = 'title', text = 'some text', linkPath = '' }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const screenType = useScreenSize();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <article 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onClick={() => navigate(`${import.meta.env.BASE_URL}${linkPath}`)} 
            style={{ cursor: "pointer" }}
        >
            {(screenType === 'pc' || screenType === 'tablet') && <span className={`${styles.animateBefor} ${isHovered ? styles.animateAfter : ''} ${icon}`}></span>}
            <div className="content">
                <h3>{title}</h3>
                <p>{text} &nbsp; <a href="">예제 코드</a></p>
            </div>
        </article>
    );
}

export default CardStyle3