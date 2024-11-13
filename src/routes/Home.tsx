import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import Card from "../components/Card";
import ContactButton from "../components/ContactButton";

function Home() {
    return (
        <>
            <Helmet>
                <title>MAT06mat</title>
            </Helmet>
            <header>
                <img className="profil" src="/MAT06mat/images/profil.png" />
                <h1>MAT06mat</h1>
                <p>Développeur en apprentissage</p>
                <ContactButton />
            </header>
            <Section gray end>
                <div className="separator margin"></div>
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
                            les projets CripApp, PizzaMama et Cubis un de mes
                            plus gros projet. De plus j'ai appris React ce qui
                            me permet de créer des applications web comme ce
                            site ou mon projet Ultraordinaire.
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
                    <Card image="project3small.jpg" link="cubis" text="Cubis" />
                    <Card
                        image="project4small.jpg"
                        link="ultraordinaire"
                        text="Ultraordinaire"
                    />
                </div>
                <div className="gap" />
                <div className="cols">
                    <Card
                        image="project2small.jpg"
                        link="cript-app"
                        text="CriptApp"
                    />
                    <Card
                        image="project1small.jpg"
                        link="pizza-mama"
                        text="Pizza Mama"
                    />
                </div>
                <div className="padding" />
            </Section>
        </>
    );
}

export default Home;
