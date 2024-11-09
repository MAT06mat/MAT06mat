import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";
import "../assets/css/Portfolio.scss";
import ContactButton from "../components/ContactButton";
import Section from "../components/Section";

function PortfolioCriptApp() {
    return (
        <>
            <Helmet>
                <title>CriptApp</title>
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
                    <h2 className="portfolio">CriptApp</h2>
                </Section>
                <Section>
                    <div className="cols">
                        <div className="center">
                            <img
                                id="img-portfolio"
                                src="/MAT06mat/images/project2.jpg"
                            />
                            <a href="https://github.com/MAT06mat/CriptApp">
                                Télécharger pour windows
                            </a>
                        </div>
                        <div className="line">
                            <p>
                                Voici une application bureau que j'ai créé de
                                zero.
                                <br />
                                Cette application s'appelle "CriptApp", elle
                                permet de coder et décoder du texte à partir
                                d'une clé donné par l'utilisateur.
                                <br />
                                Voici un{" "}
                                <a href="https://github.com/MAT06mat/CriptApp">
                                    lien
                                </a>{" "}
                                pour la télécharger.
                                <br />
                                <u>Technologies utilisées :</u>{" "}
                                <b>Python et Tkinter</b>
                            </p>
                        </div>
                    </div>
                </Section>
                <Contact />
            </div>
        </>
    );
}

export default PortfolioCriptApp;
