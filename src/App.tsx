import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import PortfolioCubis from "./routes/PortfolioCubis";
import PortfolioCriptApp from "./routes/PortfolioCriptApp";
import PortfolioDjango from "./routes/PortfolioDjango";
import PortfolioUltraordinaire from "./routes/PortfolioUltraordinaire";
import PrivacyPolicyCubis from "./routes/PrivacyPolicyCubis";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} index />
                <Route path="cubis" element={<PortfolioCubis />} />
                <Route path="criptapp" element={<PortfolioCriptApp />} />
                <Route path="exemple-django" element={<PortfolioDjango />} />
                <Route
                    path="ultraordinaire"
                    element={<PortfolioUltraordinaire />}
                />
                <Route path="privacy-policy">
                    <Route path="cubis" element={<PrivacyPolicyCubis />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
