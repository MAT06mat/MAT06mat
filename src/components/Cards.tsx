import { Link } from "react-router-dom";
import "../assets/css/Cards.scss";
import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";

interface CardProps {
    image: string;
    link: string;
    text: string;
}

export function Card({ image, link, text }: CardProps) {
    return (
        <div className="card">
            <div className="image">
                <div className="vertical-separator"></div>
                <Link to={link}>
                    <motion.img
                        src={"/MAT06mat/images/" + image}
                        alt=""
                        className="shadow"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 15px 2px #65656540",
                        }}
                    />
                </Link>
            </div>
            <div className="text">
                <Link to={link}>{text}</Link>
            </div>
        </div>
    );
}

interface CardsProps {
    cards: CardProps[];
}

function Cards({ cards }: CardsProps) {
    const cols: CardProps[][] = [];
    cards.forEach((card, index) => {
        if (index % 2 === 0) {
            cols.push([card, cards[index + 1]]);
        }
    });

    return (
        <>
            {cols.map((col, i) => {
                return (
                    <Fragment key={i}>
                        <div className="cols">
                            {col.map((card, i) => {
                                return (
                                    <Card
                                        image={card.image}
                                        link={card.link}
                                        text={card.text}
                                        key={i}
                                    />
                                );
                            })}
                        </div>
                        <div className="gap" />
                    </Fragment>
                );
            })}
        </>
    );
}

export default Cards;
