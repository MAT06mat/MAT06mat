import Portfolio from "../components/Portfolio";
import SectionImage from "../components/SectionImage";

function PortfolioPizzaMama() {
    return (
        <Portfolio title="Pizza Mama">
            <SectionImage src="project1.jpg">
                <p>
                    J'ai réaliser ce projet web pour un client travaillant dans
                    le domaine de la restauration.
                    <br />
                    L'objectif ? Permettre à ce restaurant de gagner en
                    visibilié et de proposer son menu de pizzas aux
                    utilisateurs.
                    <br />
                    Mon client, étant novice dans les nouvelles technologies, à
                    la possibilité de modifier son menu facilement en ligne
                    grâce à une interface d'administration sur mesure que j'ai
                    réalisé.
                    <br />
                    Ce projet simple mais fonctionnel a donné entière
                    satisfaction à mon client.
                    <br />
                    <a
                        href="https://mat06mat.pythonanywhere.com/"
                        target="_blank"
                    >
                        Consulter le projet
                    </a>
                    <br />
                    <u>Technologies utilisées :</u>{" "}
                    <b>HTML, CSS, DJANGO, PYTHON, HEROKU</b>
                </p>
            </SectionImage>
            <div className="gap" />
        </Portfolio>
    );
}

export default PortfolioPizzaMama;
