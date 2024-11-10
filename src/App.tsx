import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import PortfolioCubis from "./routes/PortfolioCubis";
import PortfolioCriptApp from "./routes/PortfolioCriptApp";
import PortfolioPizzaMama from "./routes/PortfolioPizzaMama";
import PortfolioUltraordinaire from "./routes/PortfolioUltraordinaire";
import PrivacyPolicyCubis from "./routes/PrivacyPolicyCubis";
import ErrorPage from "./routes/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import PageLayout from "./components/PageLayout";

function App() {
    return (
        <Router
            basename="/MAT06mat"
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route element={<Home />} index />
                    <Route path="cubis" element={<PortfolioCubis />} />
                    <Route path="cript-app" element={<PortfolioCriptApp />} />
                    <Route path="pizza-mama" element={<PortfolioPizzaMama />} />
                    <Route
                        path="ultraordinaire"
                        element={<PortfolioUltraordinaire />}
                    />
                    <Route path="privacy-policy">
                        <Route path="cubis" element={<PrivacyPolicyCubis />} />
                    </Route>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
