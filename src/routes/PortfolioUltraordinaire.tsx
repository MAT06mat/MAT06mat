import "../assets/css/Portfolio.scss";
import Portfolio from "../components/Portfolio";
import Section from "../components/Section";

function PortfolioUltraordinaire() {
    return (
        <Portfolio title="Ultraordinaire">
            <Section>
                <div className="cols">
                    <div>
                        <img
                            id="img-portfolio"
                            src="/MAT06mat/images/project4.jpg"
                        />
                    </div>
                    <div className="line">
                        <p>
                            Voici un site web que j'ai créé pour un client.
                            <br />
                            <a href="https://ultraordinaire.fr">
                                Ultraordinaire.fr
                            </a>{" "}
                            est un site vitrine pour présenter Julien Coindet,
                            un sportif de haut niveau (le site est
                            temporairement hors ligne).
                            <br />
                            Ce site a été réalisé avec React, une bibliothèque
                            java-script qui propose du type-script.
                            <br />
                            Le site https://mat06mat.github.io/MAT06mat utilise
                            la même technologie : React.
                            <br />
                            Cela permet d'avoir un affichage plus dynamique sur
                            un site web statique.
                            <br />
                            <u>Technologies utilisées :</u>{" "}
                            <b>HTML, SCSS, JS, REACT, Type-Script</b>
                        </p>
                    </div>
                </div>
                <div className="padding" />
            </Section>
        </Portfolio>
    );
}

export default PortfolioUltraordinaire;
