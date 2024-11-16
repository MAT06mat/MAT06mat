import Portfolio from "../components/Portfolio";
import SectionImage from "../components/SectionImage";

function PortfolioCubis() {
    return (
        <Portfolio title="Cubis">
            <SectionImage src="project3.jpg">
                <p>
                    <b>Cubis</b> est une <b>application mobile</b> que j'ai
                    développée de A à Z, spécialement conçue pour les amateurs
                    de jeux de réflexion. Le principe est simple : remplir une
                    grille à l'aide de pièces aux formes variées, en
                    réfléchissant à la meilleure façon de les agencer.
                    <br />
                    <br />
                    Développé en <b>Python</b> avec <b>le framework Kivy</b>, et
                    déployé sur Android grâce à l'outil <b>Buildozer</b>, Cubis
                    illustre mon savoir-faire dans la création d'applications
                    mobiles performantes et intuitives. Le jeu est{" "}
                    <b>disponible</b> sur le <b>Play Store</b>, prêt à défier
                    votre logique et vos compétences stratégiques.
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
            <div className="gap" />
        </Portfolio>
    );
}

export default PortfolioCubis;
