import Portfolio from "../components/Portfolio";
import SectionImage from "../components/SectionImage";

function PortfolioPizzaMama() {
    return (
        <Portfolio title="Pizza Mama">
            <SectionImage src="project1.jpg" gap>
                <p>
                    J'ai réaliser <b>ce projet web</b> pour un client
                    travaillant dans le domaine de la restauration. L'objectif
                    est de permettre à ce restaurant de gagner en visibilié et
                    de <b>proposer son menu de pizzas aux utilisateurs</b>.
                    <br />
                    <br />
                    Mon client, étant novice dans les nouvelles technologies, à
                    la{" "}
                    <b>
                        possibilité de modifier son menu facilement en ligne
                    </b>{" "}
                    grâce à une interface d'administration sur mesure que j'ai
                    réalisé. Ce projet simple mais fonctionnel a donné entière
                    satisfaction à mon client.
                    <br />
                    <br />
                    <a
                        href="https://mat06mat.pythonanywhere.com/"
                        target="_blank"
                    >
                        Consulter le projet
                    </a>
                    <br />
                    <br />
                    <u>Technologies utilisées :</u>{" "}
                    <b>HTML, CSS, DJANGO, PYTHON, HEROKU</b>
                </p>
            </SectionImage>
        </Portfolio>
    );
}

export default PortfolioPizzaMama;
