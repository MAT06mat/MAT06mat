import { Link } from "react-router-dom";
import Portfolio from "../layouts/Portfolio";
import SectionImage from "../layouts/SectionImage";

function PortfolioMatBot() {
    return (
        <Portfolio title="MatBot">
            <SectionImage src="project6.jpg" gap>
                <p>
                    Le <b>MatBot</b> est un bot Discord codé en Python, conçu
                    pour faciliter la gestion des serveurs et offrir des
                    fonctionnalités variées. Il intègre notamment mon projet{" "}
                    <Link to="../cript-app">CriptApp</Link>, permettant
                    d'utiliser ses outils de <b>cryptage et de traduction</b>{" "}
                    directement via des commandes.
                    <br />
                    <br />
                    En plus <b>des fonctions d’administration</b>, comme la
                    suppression de messages ou le bannissement, le bot propose{" "}
                    <b>des options ludiques</b>, telles qu’un jeu de nombre
                    mystère ou la création de phrases aléatoires.{" "}
                    <b>Simple et polyvalent</b>, le MatBot enrichit l’expérience
                    des utilisateurs sur Discord.
                    <br />
                    <br />
                    <u>Technologies utilisées :</u> <b>PYTHON, DISCORD.PY</b>
                    <br />
                    <br />
                    <a
                        href="https://discord.com/oauth2/authorize?client_id=1069896287765401630"
                        target="_blank"
                    >
                        Ajouter le bot
                    </a>
                </p>
            </SectionImage>
        </Portfolio>
    );
}

export default PortfolioMatBot;
