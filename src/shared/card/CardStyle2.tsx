import { Link } from "react-router-dom";

interface Props {
    image: string,
    title: string,
    text: string,
    linkPath?: string
}

function CardStyle2({image, title, text, linkPath}:Props) {
    return (
        <article>
            <a href={`${import.meta.env.BASE_URL}${linkPath}`} className="image"><img src={image} alt="" /></a>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul className="actions">
                <li><Link to={`${import.meta.env.BASE_URL}${linkPath}`} className="button">More</Link></li>
            </ul>
        </article>
    );
}

export default CardStyle2