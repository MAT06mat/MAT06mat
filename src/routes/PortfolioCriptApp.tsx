import Portfolio from "../layouts/Portfolio";
import SectionImage from "../layouts/SectionImage";

function PortfolioCriptApp() {
    return (
        <Portfolio title="CriptApp">
            <SectionImage src="project2.jpg" gap>
                <p>
                    <b>CriptApp</b> est une application de bureau que j'ai
                    développée à partir de zéro. Cette application offre une
                    solution simple et efficace pour <b>encoder et décoder</b>{" "}
                    des textes en utilisant <b>une clé</b> fournie par
                    l'utilisateur.
                    <br />
                    <br />
                    L'objectif principal de CriptApp est de permettre à chacun
                    de <b>sécuriser ses messages</b> de manière accessible.
                    L'utilisateur peut saisir un texte, définir une clé de son
                    choix, et obtenir un résultat codé unique. De même, en
                    fournissant la même clé, il peut décoder le message avec
                    précision.
                    <br />
                    <br />
                    <u>Technologies utilisées :</u> <b>PYTHON, TKINTER</b>
                    <br />
                    <br />
                    <a
                        href="https://github.com/MAT06mat/CriptApp"
                        target="_blank"
                    >
                        Consulter le projet
                    </a>
                </p>
            </SectionImage>
        </Portfolio>
    );
}

export default PortfolioCriptApp;
