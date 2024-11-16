import Portfolio from "../components/Portfolio";
import SectionImage from "../components/SectionImage";

function PortfolioCubis() {
    return (
        <Portfolio title="Cubis">
            <SectionImage src="project3.jpg">
                <p>
                    Voici une application mobile que j'ai créé de zero.
                    <br />
                    Cubis est une application mobile qui entre dans la catégorie
                    des jeux de réflexion.
                    <br />
                    Le but est de remplir une grille avec des pièces de formes
                    variées.
                    <br />
                    Cubis est disponible sur le playstore :{" "}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.matthieufelten.cubis&pli=1"
                        target="_blank"
                    >
                        Télécharger pour android
                    </a>
                    <br />
                    <u>Technologies utilisées :</u>{" "}
                    <b>Python, Kivy et Buildozer</b>
                </p>
            </SectionImage>
            <div className="gap" />
        </Portfolio>
    );
}

export default PortfolioCubis;
