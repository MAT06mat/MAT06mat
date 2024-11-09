import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";
import "../assets/css/Portfolio.scss";
import ContactButton from "../components/ContactButton";
import Section from "../components/Section";

function PortfolioDjango() {
    return (
        <>
            <Helmet>
                <title>Pizza Mama</title>
            </Helmet>
            <div className="portfolio">
                <header>
                    <div
                        className="bar"
                        style={{ marginTop: "6px", marginLeft: "6px" }}
                    >
                        <h1>MAT06mat</h1>
                    </div>
                    <ContactButton />
                </header>
                <Section gray end>
                    <Link to="/" className="back">
                        Retour
                    </Link>
                    <div
                        className="separateur"
                        style={{ marginTop: "-20px" }}
                    ></div>
                    <h1 className="portfolio">Portfolio</h1>
                    <h2 className="portfolio">Pizza Mama</h2>
                </Section>
                <Section>
                    <div className="cols">
                        <div className="center">
                            <img
                                id="img-portfolio"
                                src="/MAT06mat/images/project1.jpg"
                            />
                            <a href="https://mat06mat.pythonanywhere.com/">
                                Consulter le projet
                            </a>
                        </div>
                        <div className="line">
                            <p>
                                J'ai réaliser ce projet web pour un client
                                travaillant dans le domaine de la restauration.
                                <br />
                                L'objectif ? Permettre à ce restaurant de gagner
                                en visibilié et de proposer son menu de pizzas
                                aux utilisateurs.
                                <br />
                                Mon client, étant novice dans les nouvelles
                                technologies, à la possibilité de modifier son
                                menu facilement en ligne grâce à une interface
                                d'administration sur mesure que j'ai réalisé.
                                <br />
                                Ce projet simple mais fonctionnel a donné
                                entière satisfaction à mon client.
                                <br />
                                <u>Technologies utilisées :</u>{" "}
                                <b>HTML, CSS, DJANGO, PYTHON, HEROKU</b>
                            </p>
                        </div>
                    </div>
                </Section>
                <Contact />
            </div>
        </>
    );
}

export default PortfolioDjango;
