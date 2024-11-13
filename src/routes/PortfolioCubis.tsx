import Section from "../components/Section";
import Portfolio from "../components/Portfolio";

function PortfolioCubis() {
    return (
        <Portfolio title="Cubis">
            <Section>
                <div className="cols">
                    <div className="center">
                        <img
                            id="img-portfolio"
                            src="/MAT06mat/images/project3.jpg"
                        />
                        <a
                            href="https://play.google.com/store/apps/details?id=com.matthieufelten.cubis&pli=1"
                            target="_blank"
                        >
                            Télécharger pour android
                        </a>
                    </div>
                    <div className="line">
                        <p>
                            Voici une application mobile que j'ai créé de zero.
                            <br />
                            Cubis est une application mobile qui entre dans la
                            catégorie des jeux de réflexion.
                            <br />
                            Le but est de remplir une grille avec des pièces de
                            formes variées.
                            <br />
                            Cubis est disponible sur le playstore :{" "}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.matthieufelten.cubis&pli=1"
                                target="_blank"
                            >
                                Découvrir dès maintenant !
                            </a>
                            <br />
                            <u>Technologies utilisées :</u>{" "}
                            <b>Python, Kivy et Buildozer</b>
                        </p>
                    </div>
                </div>
                <div className="padding" />
            </Section>
        </Portfolio>
    );
}

export default PortfolioCubis;
