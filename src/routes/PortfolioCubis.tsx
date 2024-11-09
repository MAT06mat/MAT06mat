import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import "../assets/css/Portfolio.scss";
import ContactButton from "../components/ContactButton";

function PortfolioCubis() {
    return (
        <>
            <Helmet>
                <title>Cubis</title>
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
                    <h2 className="portfolio">Cubis</h2>
                </Section>
                <Section>
                    <div className="cols">
                        <div className="center">
                            <img
                                id="img-portfolio"
                                src="/MAT06mat/images/project3.jpg"
                            />
                            <a href="https://play.google.com/store/apps/details?id=com.matthieufelten.cubis&pli=1">
                                Télécharger pour android
                            </a>
                        </div>
                        <div className="line">
                            <p>
                                Voici une application mobile que j'ai créé de
                                zero.
                                <br />
                                Cubis est une application mobile qui entre dans
                                la catégorie des jeux de réflexion.
                                <br />
                                Le but est de remplir une grille avec des pièces
                                de formes variées.
                                <br />
                                Cubis est disponible sur le playstore :{" "}
                                <a href="https://play.google.com/store/apps/details?id=com.matthieufelten.cubis&pli=1">
                                    Découvrir !
                                </a>
                                <br />
                                <u>Technologies utilisées :</u>{" "}
                                <b>Python, Kivy et Buildozer</b>
                            </p>
                        </div>
                    </div>
                </Section>
                <Contact />
            </div>
        </>
    );
}

export default PortfolioCubis;
