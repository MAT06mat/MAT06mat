import Portfolio from "../layouts/Portfolio";
import SectionImage from "../layouts/SectionImage";

function PortfolioGlups() {
    return (
        <Portfolio title="Glups">
            <SectionImage src="project5small.jpg" gap>
                <p>
                    <b>Glups</b> (Get LinkedIn User Profile Solution) est une
                    extension Chrome développée sur mesure pour faciliter{" "}
                    <b>la recherche de profils LinkedIn</b>. Conçue à la demande
                    d’un client, elle{" "}
                    <b>automatise la collecte des informations</b> d’un profil
                    LinkedIn et génère, en un clic,{" "}
                    <b>un email prêt à être envoyé</b> vers une base de données
                    dédiée.
                    <br />
                    <br />
                    Avec Glups, l’envoi d’informations devient{" "}
                    <b>rapide et efficace</b>, simplifiant considérablement le
                    processus de gestion des profils récoltés.
                    <br />
                    <br />
                    <u>Technologies utilisées :</u> <b>HTML, CSS, JS, CHROME</b>
                    <br />
                    <br />
                    <a
                        href="https://github.com/MAT06mat/Chrome-extension-Glups"
                        target="_blank"
                    >
                        Consulter le projet
                    </a>
                </p>
            </SectionImage>
        </Portfolio>
    );
}

export default PortfolioGlups;
