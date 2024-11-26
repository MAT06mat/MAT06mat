import { Outlet, ScrollRestoration } from "react-router-dom";
import "../assets/css/PageLayout.scss";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function PageLayout() {
    return (
        <>
            <Outlet />
            <Contact />
            <Footer />
            <ScrollRestoration getKey={(location) => location.pathname} />
        </>
    );
}

export default PageLayout;
