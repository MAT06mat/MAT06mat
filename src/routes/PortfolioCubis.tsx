import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

function PortfolioCubis() {
    return (
        <>
            <Helmet>
                <title>Cubis</title>
            </Helmet>
            <div className="portfolio-header">
                <div
                    className="cover-bar"
                    style={{ marginTop: "6px", marginLeft: "6px" }}
                >
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
                style={{ paddingTop: "20px" }}
            >
                <Link to="/" className="portfolio-back">
                    Retour
                </Link>
                <div
                    className="separateur"
                    style={{ marginTop: "-20px" }}
                ></div>
                <h1 className="portfolio">Portfolio</h1>
                <h2 className="portfolio">Une Application Mobile</h2>
            </div>

            <div className="section">
                <div className="texte-avec-ligne-verticale">
                    <p>
                        Voici une application bureau que j'ai créé de zero.
                        <br />
                        Cette application s'appelle "CriptApp", elle permet de
                        coder et décoder du texte à partir d'une clé donné par
                        l'utilisateur.
                        <br />
                        Voici un{" "}
                        <a href="https://github.com/MAT06mat/CriptApp">
                            lien
                        </a>{" "}
                        pour la télécharger.
                        <br />
                        <u>Technologies utilisées :</u> <b>Python et Tkinter</b>
                    </p>
                </div>
                <div className="center">
                    <img
                        src="/MAT06mat/images/project2.jpg"
                        className="portfolio"
                    />
                    <a
                        style={{ display: "block" }}
                        href="https://github.com/MAT06mat/CriptApp"
                    >
                        Télécharger sur windows
                    </a>
                </div>
            </div>
            <Contact />
        </>
    );
}

export default PortfolioCubis;
