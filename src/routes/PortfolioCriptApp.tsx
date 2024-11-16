import Portfolio from "../components/Portfolio";
import SectionImage from "../components/SectionImage";

function PortfolioCriptApp() {
    return (
        <Portfolio title="CriptApp">
            <SectionImage src="project2.jpg">
                <p>
                    Voici une application bureau que j'ai créé de zero.
                    <br />
                    Cette application s'appelle CriptApp, elle permet de coder
                    et décoder du texte à partir d'une clé donné par
                    l'utilisateur.
                    <br />
                    Voici un{" "}
                    <a
                        href="https://github.com/MAT06mat/CriptApp"
                        target="_blank"
                    >
                        lien
                    </a>{" "}
                    pour la télécharger.
                    <br />
                    <u>Technologies utilisées :</u> <b>Python et Tkinter</b>
                </p>
            </SectionImage>
            <div className="gap" />
        </Portfolio>
    );
}

export default PortfolioCriptApp;
