import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import PortfolioCubis from "./routes/PortfolioCubis";
import PortfolioCriptApp from "./routes/PortfolioCriptApp";
import PortfolioPizzaMama from "./routes/PortfolioPizzaMama";
import PortfolioUltraordinaire from "./routes/PortfolioUltraordinaire";
import PrivacyPolicyCubis from "./routes/PrivacyPolicyCubis";
import ErrorPage from "./routes/ErrorPage";
import PageLayout from "./layouts/PageLayout";
import PortfolioMatBot from "./routes/PortfolioMatBot";
import PortfolioGlups from "./routes/PortfolioGlups";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PageLayout />}>
                <Route element={<Home />} index />
                <Route path="cubis" element={<PortfolioCubis />} />
                <Route
                    path="ultraordinaire"
                    element={<PortfolioUltraordinaire />}
                />
                <Route path="cript-app" element={<PortfolioCriptApp />} />
                <Route path="pizza-mama" element={<PortfolioPizzaMama />} />
                <Route path="mat-bot" element={<PortfolioMatBot />} />
                <Route path="glups" element={<PortfolioGlups />} />
            </Route>
            <Route path="privacy-policy">
                <Route path="cubis" element={<PrivacyPolicyCubis />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </>
    ),
    {
        basename: "/MAT06mat",
        future: {
            v7_relativeSplatPath: true,
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

function App() {
    return (
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    );
}

export default App;
