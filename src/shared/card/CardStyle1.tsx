
interface Props {
    icon: string,
    title: string,
    text: string
}

function CardStyle1({icon, title, text}: Props) {
    return (
        <article>
            <span className={icon}></span>
            <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
    );
}

export default CardStyle1