import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About.jsx";
// const About = lazy(() => import("./About"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* <Suspense fallback={<p>Loading</p>}> */}
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                {/* </Suspense> */}
            </Routes>
        </BrowserRouter>
        {/* <App /> */}
    </React.StrictMode>
);
