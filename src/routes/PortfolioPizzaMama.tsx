import Section from "../components/Section";
import Portfolio from "../components/Portfolio";

function PortfolioPizzaMama() {
    return (
        <Portfolio title="Pizza Mama">
            <Section>
                <div className="cols">
                    <div className="center">
                        <img
                            id="img-portfolio"
                            src="/MAT06mat/images/project1.jpg"
                        />
                        <a href="https://mat06mat.pythonanywhere.com/">
                            Consulter le projet
                        </a>
                    </div>
                    <div className="line">
                        <p>
                            J'ai réaliser ce projet web pour un client
                            travaillant dans le domaine de la restauration.
                            <br />
                            L'objectif ? Permettre à ce restaurant de gagner en
                            visibilié et de proposer son menu de pizzas aux
                            utilisateurs.
                            <br />
                            Mon client, étant novice dans les nouvelles
                            technologies, à la possibilité de modifier son menu
                            facilement en ligne grâce à une interface
                            d'administration sur mesure que j'ai réalisé.
                            <br />
                            Ce projet simple mais fonctionnel a donné entière
                            satisfaction à mon client.
                            <br />
                            <u>Technologies utilisées :</u>{" "}
                            <b>HTML, CSS, DJANGO, PYTHON, HEROKU</b>
                        </p>
                    </div>
                </div>
                <div className="padding" />
            </Section>
        </Portfolio>
    );
}

export default PortfolioPizzaMama;
