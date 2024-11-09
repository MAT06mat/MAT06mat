import Contact from "../components/Contact";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="cover">
                <img className="cover-profil" src="images/profil.png" />
                <h1>MAT06mat</h1>
                <p>Développeur en apprentissage</p>

                <div style={{ textAlign: "center" }}>
                    <a
                        className="contact-button"
                        href="mailto:mat06mat22@gmail.com?subject=Contact%20depuis%20matthieufelten.com"
                    >
                        ME CONTACTER
                    </a>
                </div>
                <div className="cover-bar">
                    <a href="mailto:mat06mat22@gmail.com?subject=Contact%20depuis%20matthieufelten.com">
                        mat06mat22@gmail.com
                    </a>
                </div>
            </div>

            <div className="section section-grise1">
                <div className="separateur"></div>
                <p>
                    Je développe <b>votre projet WEB</b> ou vos{" "}
                    <b>Applications mobiles</b> iOS/Android de A à Z
                </p>
            </div>

            <div className="section en-savoir-plus">
                <h2>En savoir plus</h2>
                <img src="images/profil2.png" className="col-contenu" />
                <div className="col-contenu float-right">
                    <div className="texte-avec-ligne-verticale">
                        <p>
                            Passionné par la programmation depuis le plus jeune
                            âge, je suis maintenant un développeur expérimenté.
                            <br />
                            <br />
                            J'ai suivi une formation python qui m'a permis
                            d'obtenir un niveau en programmation python
                            suffisament solide pour réaliser les projets
                            "CripApp", "PizzaMama" et "Cubis" un de mes plus
                            gros projet. De plus j'ai appris react.js ce qui me
                            permet de créer des applications web.
                        </p>
                        <a href="https://github.com/MAT06mat" target="_blank">
                            En savoir plus sur mon profil
                        </a>
                    </div>
                </div>
            </div>

            <div className="section section-grise2">
                <h2>Portfolio</h2>
                <div className="tableau-portfolio">
                    <table
                        className="col-portfolio"
                        style={{ display: "inline-block" }}
                    >
                        <tr>
                            <td>
                                <div className="barre-verticale"></div>
                            </td>
                            <td style={{ width: "100%" }}>
                                <Link to="cubis">
                                    <img
                                        style={{ width: "100%" }}
                                        src="images/project3small.jpg"
                                    />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="center">
                                <Link to="cubis">Application mobile Cubis</Link>
                            </td>
                        </tr>
                    </table>
                    <table className="col-portfolio float-right">
                        <tr>
                            <td>
                                <div className="barre-verticale"></div>
                            </td>
                            <td style={{ width: "100%" }}>
                                <Link to="criptapp">
                                    <img
                                        style={{ width: "100%" }}
                                        src="images/project2small.jpg"
                                    />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="center">
                                <Link to="criptapp">
                                    Application bureau "CripApp"
                                </Link>
                            </td>
                        </tr>
                    </table>
                    <table
                        className="col-portfolio"
                        style={{ display: "inline-block" }}
                    >
                        <tr>
                            <td>
                                <div className="barre-verticale"></div>
                            </td>
                            <td style={{ width: "100%" }}>
                                <Link to="exemple-django">
                                    <img
                                        style={{ width: "100%" }}
                                        src="images/project1small.jpg"
                                    />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td align="center">
                                <Link to="exemple-django">
                                    Site web pour un restaurant
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <Contact />
        </>
    );
}

export default Home;
