import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import Cards from "../components/Card";
import ContactButton from "../components/ContactButton";
import SectionImage from "../components/SectionImage";

function Home() {
    function handleScrollToPortfolio() {
        const portfolio = document.getElementById("portfolioSection");
        if (portfolio) {
            window.scrollTo({ top: portfolio.offsetTop, behavior: "smooth" });
        }
    }

    return (
        <>
            <Helmet>
                <title>MAT06mat</title>
            </Helmet>
            <header>
                <img className="profil" src="/MAT06mat/images/profil.png" />
                <h1>MAT06mat</h1>
                <p>Développeur expérimenté</p>
                <ContactButton />
            </header>
            <Section gray end>
                <div className="separator"></div>
                <p className="gray">
                    Je développe <b>votre projet WEB</b> ou vos{" "}
                    <b>Applications mobiles</b> iOS/Android de A à Z
                </p>
            </Section>
            <SectionImage title="Mon profil" src="mc1.png" reverse>
                <p>
                    Bonjour👋, je m'appelle Matthieu.
                    <br />
                    <b>Passionné par la programmation</b> depuis le plus jeune
                    âge, je suis aujourd'hui un <b>développeur expérimenté</b>.
                    Depuis que j'ai découvert cet univers, je n'ai cessé
                    d'apprendre pour atteindre mon niveau actuel.
                    <br />
                    <br />
                    Aujourd'hui, je suis capable de créer des applications
                    mobiles, des logiciels de bureau, des sites web, des API et
                    des scripts d'automatisation. Je maîtrise notamment les
                    langages{" "}
                    <b>
                        Python, HTML, CSS, JavaScript, TypeScript, C++, PHP
                    </b>{" "}
                    et bien d'autres.
                    <br />
                    <br />
                    Ces connaissance ont étés aquises grâce à des formations
                    comme celle de{" "}
                    <a
                        href="https://codeavecjonathan.com/formations.html"
                        target="_blank"
                    >
                        Jonathan Roux
                    </a>{" "}
                    pour Python.
                </p>
            </SectionImage>
            <SectionImage title="Mes projets" src="mc2.png" gray>
                <p>
                    Au fil des années, j'ai eu l'opportunité de travailler sur
                    des <b>projets variés</b>, mettant en valeur mes compétences
                    dans plusieurs domaines du développement.
                    <br />
                    <br />
                    Par exemple, j'ai créé <b>Cubis</b>, un jeu mobile de
                    réflexion développée en <b>Python</b> avec le framework{" "}
                    <b>Kivy</b>. J'ai également réalisé le site{" "}
                    <b>ultraordinaire.fr</b> pour un client, en utilisant la
                    bibliothèque <b>React</b> pour créer une interface moderne
                    et interactive, parfaitement adaptée à ses besoins.
                    <br />
                    <br />
                    Que ce soit dans la création de sites web, d’applications
                    mobiles ou d'outils d'automatisation, chacun de mes projets
                    est <b>l'occasion de repousser mes limites</b> et de
                    répondre aux attentes spécifiques de mes clients.
                    <br />
                    <a className="no-select" onClick={handleScrollToPortfolio}>
                        Voir mes autres projets
                    </a>
                </p>
            </SectionImage>
            <SectionImage title="Mes loisirs" src="mc3.png" reverse>
                <p>
                    En dehors du développement, je suis passionné par{" "}
                    <b>Minecraft</b>, un jeu qui permet de laisser libre cours à
                    sa <b>créativité</b>.
                    <br />
                    <br />
                    L'un des aspects du jeu que j'apprécie particulièrement est
                    la <b>redstone</b>, un élément permettant{" "}
                    <b>de créer des circuits et des mécanismes variés</b>,
                    laissant cours à une imagination infinie. Grâce à la
                    redstone, j'ai pu concevoir de nombreux systèmes complexes,
                    allant de portes automatiques à des compteurs binaire, et
                    même à un <b>ordinateur fonctionnel</b>.
                    <br />
                    <br />
                    Ce loisir me permet de mettre en pratique des compétences en
                    logique et en résolution de problèmes tout en explorant des
                    concepts de base de{" "}
                    <b>l’électronique et de la programmation</b> dans un cadre
                    ludique.
                </p>
            </SectionImage>
            <div id="portfolioSection" />
            <Section gray start>
                <h2>Portfolio</h2>
                <Cards
                    cards={[
                        {
                            image: "project3small.jpg",
                            link: "cubis",
                            text: "Cubis",
                        },
                        {
                            image: "project4small.jpg",
                            link: "ultraordinaire",
                            text: "Ultraordinaire",
                        },
                        {
                            image: "project2small.jpg",
                            link: "cript-app",
                            text: "CriptApp",
                        },
                        {
                            image: "project1small.jpg",
                            link: "pizza-mama",
                            text: "Pizza Mama",
                        },
                        {
                            image: "project6small.jpg",
                            link: "matbot",
                            text: "MatBot",
                        },
                        {
                            image: "project5small.jpg",
                            link: "glups",
                            text: "Glups",
                        },
                    ]}
                />
            </Section>
        </>
    );
}

export default Home;
