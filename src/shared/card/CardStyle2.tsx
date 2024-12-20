
interface Props {
    image: string,
    title: string,
    text: string
}

function CardStyle2({image, title, text}:Props) {
    return (
        <article>
            <a href="#" className="image"><img src={image} alt="" /></a>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul className="actions">
                <li><a href="#" className="button">More</a></li>
            </ul>
        </article>
    );
}

export default CardStyle2