import Portfolio from "../layouts/Portfolio";
import SectionImage from "../layouts/SectionImage";

function PortfolioUltraordinaire() {
    return (
        <Portfolio title="Ultraordinaire">
            <SectionImage src="project4.jpg" gap>
                <p>
                    J'ai conçu le site{" "}
                    <a href="https://ultraordinaire.fr" target="_blank">
                        ultraordinaire.fr
                    </a>{" "}
                    pour présenter Julien Coindet, un sportif de haut niveau (le
                    site est temporairement hors ligne). Ce site vitrine a été
                    développé avec <b>React</b>, une{" "}
                    <b>bibliothèque JavaScript moderne</b>, complétée par{" "}
                    <b>TypeScript</b> pour garantir un code plus robuste et
                    maintenable.
                    <br />
                    <br />
                    Ce projet avait pour objectif de fournir{" "}
                    <b>une interface dynamique et réactive</b> tout en
                    conservant les avantages d’un site statique, comme une
                    performance accrue et une meilleure accessibilité. Un
                    exemple similaire de site utilisant cette technologie est
                    mon site <b>https://mat06mat.github.io/MAT06mat</b>, qui
                    repose également sur React.
                    <br />
                    <br />
                    <u>Technologies utilisées :</u>{" "}
                    <b>HTML, SCSS, JS, REACT, TypeScript</b>
                </p>
            </SectionImage>
        </Portfolio>
    );
}

export default PortfolioUltraordinaire;
