import "../assets/css/Contact.scss";
import ContactButton from "./ContactButton";

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="separator" />
                <div className="cols">
                    <div className="right">
                        <div className="line">
                            <h2>Parlons de votre projet</h2>
                            <p>
                                Vous avez un projet web, ou besoin d'une
                                application mobile iOS/Android ? Vous êtes au
                                bon endroit !
                                <br />
                                <a href="mailto:mat06mat22@gmail.com">
                                    Contactez moi
                                </a>{" "}
                                pour discuter de votre projet et obtenir l’avis
                                d’un expert.
                            </p>
                        </div>
                    </div>
                    <div className="left">
                        <img
                            className="profil"
                            src="/MAT06mat/images/profil.png"
                        />
                        <ContactButton />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
