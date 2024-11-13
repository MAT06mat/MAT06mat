import { Helmet } from "react-helmet-async";
import "../assets/css/ErrorPage.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <>
            <Helmet>
                <title>Oups...</title>
                <meta name="description" content="Page d'erreur" />
                <link rel="canonical" href="/404" />
            </Helmet>
            <div id="error-page">
                <div>
                    <h1>Oups!</h1>
                    <p>Désolé, une erreur inattendue s'est produite...</p>
                </div>
                <Link className="link" to="/">
                    Accueil
                </Link>
            </div>
        </>
    );
}
