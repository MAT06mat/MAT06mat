import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";
import Section from "../components/Section";
import Card from "../components/Card";

function Home() {
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <header>
                <img className="profil" src="/MAT06mat/images/profil.png" />
                <h1>MAT06mat</h1>
                <p>Développeur en apprentissage</p>

                <div style={{ textAlign: "center" }}>
                    <a
                        className="contact-button"
                        href="mailto:mat06mat22@gmail.com"
                    >
                        ME CONTACTER
                    </a>
                </div>
                <div className="bar">
                    <a href="mailto:mat06mat22@gmail.com">
                        mat06mat22@gmail.com
                    </a>
                </div>
            </header>
            <Section gray end>
                <div className="separateur margin"></div>
                <p className="gray">
                    Je développe <b>votre projet WEB</b> ou vos{" "}
                    <b>Applications mobiles</b> iOS/Android de A à Z
                </p>
            </Section>
            <Section>
                <h2>En savoir plus</h2>
                <div className="cols">
                    <img src="/MAT06mat/images/profil2.png" />
                    <div className="line">
                        <p>
                            Passionné par la programmation depuis le plus jeune
                            âge, je suis maintenant un développeur expérimenté.
                            <br />
                            <br />
                            J'ai suivi une formation python qui m'a permis
                            d'obtenir un niveau suffisament solide pour réaliser
                            les projets "CripApp", "PizzaMama" et "Cubis" un de
                            mes plus gros projet. De plus j'ai appris react ce
                            qui me permet de créer des applications web.
                        </p>
                        <a href="https://github.com/MAT06mat" target="_blank">
                            En savoir plus sur mon profil
                        </a>
                    </div>
                </div>
            </Section>
            <Section gray start>
                <h2>Portfolio</h2>
                <div className="cols">
                    <Card
                        image="project3small.jpg"
                        link="cubis"
                        text="Application mobile Cubis"
                    />
                    <Card
                        image="project2small.jpg"
                        link="criptapp"
                        text="Application bureau CripApp"
                    />
                    <Card
                        image="project1small.jpg"
                        link="exemple-django"
                        text="Site web pour un restaurant"
                    />
                </div>
            </Section>
            <Contact />
        </>
    );
}

export default Home;
