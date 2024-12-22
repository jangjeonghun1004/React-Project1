import { useState } from "react";
import styles from './CardStyle3.module.css'
import { useNavigate } from "react-router-dom";

interface Props {
    icon?: string,
    title?: string,
    text?: string
}

function CardStyle3({ icon='icon fa-gem', title='title', text='some text' }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => navigate(`${process.env.NODE_ENV === 'production' ? '/React_Project1/career' : '/career'}`)} style={{ cursor: "pointer" }}>
            <span className={`${styles.animateBefor} ${isHovered ? styles.animateAfter : ''} ${icon}`}></span>
            <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
    );
}

export default CardStyle3