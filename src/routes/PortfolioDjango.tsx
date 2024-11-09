import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

function PortfolioDjango() {
    return (
        <>
            <Helmet>
                <title>Exemple Django</title>
            </Helmet>
            <div className="portfolio-header">
                <div className="cover-bar">
                    <h1>MAT06mat</h1>
                </div>
                <a
                    className="contact-button portfolio-header float-right"
                    href="mailto:mat06mat22@gmail.com?subject=Contact%20depuis%20MAT06mat.com"
                >
                    ME CONTACTER
                </a>
            </div>
            <div
                className="section section-grise1"
                style={{ marginTop: "6px", marginLeft: "6px" }}
            >
                <Link to="/" className="portfolio-back">
                    Retour
                </Link>
                <div
                    className="separateur"
                    style={{ marginTop: "-20px" }}
                ></div>
                <h1 className="portfolio">Portfolio</h1>
                <h2 className="portfolio">Site web pour un restaurant</h2>
            </div>

            <div className="section">
                <div className="texte-avec-ligne-verticale">
                    <p>
                        J'ai réaliser ce projet web pour un client travaillant
                        dans le domaine de la restauration.
                        <br />
                        L'objectif ? Permettre à ce restaurant de gagner en
                        visibilié et de proposer son menu de pizzas aux
                        utilisateurs.
                        <br />
                        Mon client, étant novice dans les nouvelles
                        technologies, à la possibilité de modifier son menu
                        facilement en ligne grâce à une interface
                        d'administration sur mesure que j'ai réalisé.
                        <br />
                        Ce projet simple mais fonctionnel a donné entière
                        satisfaction à mon client.
                        <br />
                        <u>Technologies utilisées :</u>{" "}
                        <b>HTML, CSS, DJANGO, PYTHON, HEROKU</b>
                    </p>
                </div>
                <div className="center">
                    <a href="https://mat06mat.pythonanywhere.com/">
                        <img
                            src="../images/project1.jpg"
                            className="portfolio"
                        />
                    </a>
                    <a
                        style={{ display: "block" }}
                        href="https://mat06mat.pythonanywhere.com/"
                    >
                        Consulter le projet
                    </a>
                </div>
            </div>
            <Contact />
        </>
    );
}

export default PortfolioDjango;
