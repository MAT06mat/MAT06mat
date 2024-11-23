import Portfolio from "../layouts/Portfolio";
import SectionImage from "../layouts/SectionImage";

function PortfolioCubis() {
    return (
        <Portfolio title="Cubis">
            <SectionImage src="project3.jpg" gap>
                <p>
                    <b>Cubis</b> est une <b>application mobile</b> que j'ai
                    développée de A à Z, spécialement conçue pour les amateurs
                    de jeux de réflexion. Le principe est simple : remplir une
                    grille à l'aide de pièces aux formes variées, en
                    réfléchissant à la meilleure façon de les agencer.
                    <br />
                    <br />
                    Développé en <b>Python</b>, Cubis illustre mon savoir-faire
                    dans la création d'applications mobiles performantes et
                    intuitives. Le jeu est <b>disponible</b> sur le{" "}
                    <b>Play Store</b>, prêt à défier votre logique et vos
                    compétences stratégiques.
                    <br />
                    <br />
                    <u>Technologies utilisées :</u>{" "}
                    <b>PYTHON, KIVY, BUILDOZER, PHP</b>
                    <br />
                    <br />
                    <a
                        href="https://play.google.com/store/apps/details?id=com.matthieufelten.cubis&pli=1"
                        target="_blank"
                    >
                        Télécharger pour android
                    </a>
                </p>
            </SectionImage>
        </Portfolio>
    );
}

export default PortfolioCubis;
