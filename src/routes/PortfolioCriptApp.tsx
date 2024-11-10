import Section from "../components/Section";
import Portfolio from "../components/Portfolio";

function PortfolioCriptApp() {
    return (
        <Portfolio title="CriptApp">
            <Section>
                <div className="cols">
                    <div className="center">
                        <img
                            id="img-portfolio"
                            src="/MAT06mat/images/project2.jpg"
                        />
                        <a href="https://github.com/MAT06mat/CriptApp">
                            Télécharger pour windows
                        </a>
                    </div>
                    <div className="line">
                        <p>
                            Voici une application bureau que j'ai créé de zero.
                            <br />
                            Cette application s'appelle CriptApp, elle permet de
                            coder et décoder du texte à partir d'une clé donné
                            par l'utilisateur.
                            <br />
                            Voici un{" "}
                            <a href="https://github.com/MAT06mat/CriptApp">
                                lien
                            </a>{" "}
                            pour la télécharger.
                            <br />
                            <u>Technologies utilisées :</u>{" "}
                            <b>Python et Tkinter</b>
                        </p>
                    </div>
                </div>
                <div className="padding" />
            </Section>
        </Portfolio>
    );
}

export default PortfolioCriptApp;
