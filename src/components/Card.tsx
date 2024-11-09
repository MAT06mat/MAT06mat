import { Link } from "react-router-dom";
import "../assets/css/Cards.scss";

interface Props {
    image: string;
    link: string;
    text: string;
}

function Card({ image, link, text }: Props) {
    return (
        <div className="card">
            <div className="image">
                <div className="vertical-separator"></div>
                <Link to={link}>
                    <img src={"/MAT06mat/images/" + image} alt="" />
                </Link>
            </div>
            <div className="text">
                <Link to={link}>{text}</Link>
            </div>
        </div>
    );
}

export default Card;
