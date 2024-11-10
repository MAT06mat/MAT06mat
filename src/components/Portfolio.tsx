import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import ContactButton from "./ContactButton";
import "../assets/css/Portfolio.scss";
import Section from "./Section";
import { Link } from "react-router-dom";
import Contact from "./Contact";

interface Props {
    title: string;
    children: ReactNode;
}

function Portfolio({ title, children }: Props) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="portfolio">
                <header>
                    <div className="bar">
                        <h1>MAT06mat</h1>
                    </div>
                    <ContactButton />
                </header>

                <Section gray end>
                    <Link to="/" className="back">
                        Retour
                    </Link>
                    <div
                        className="separator"
                        style={{ marginTop: "-20px" }}
                    ></div>
                    <h1 className="portfolio">Portfolio</h1>
                    <h2 className="portfolio">{title}</h2>
                </Section>
                {children}
            </div>
            <Contact />
        </>
    );
}

export default Portfolio;
