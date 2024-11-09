function Contact() {
    return (
        <div className="section">
            <div
                className="separateur display-mobile"
                style={{ marginBottom: "20px" }}
            ></div>
            <div className="frame">
                <p className="frame-title">Parlons de votre projet</p>
                <table style={{ width: "100%" }}>
                    <tr>
                        <td valign="top" align="center">
                            <img src="../images/profil.png" />
                        </td>
                        <td>
                            <div
                                className="texte-avec-ligne-verticale"
                                style={{ marginLeft: "20px" }}
                            >
                                <p>
                                    Besoin de discuter de votre projet et
                                    obtenir l’avis d’un expert ?
                                    <br />
                                    <a href="mailto:mat06mat22@gmail.com?subject=Contact%20depuis%20MAT06mat.com">
                                        Contactez moi par email
                                    </a>
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Contact;
