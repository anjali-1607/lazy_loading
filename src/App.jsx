import React, { Suspense, lazy } from "react";
import "./App.css";
// import Home from "./Home";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default function App() {
    return (
        <>
            <p>Hello</p>
            <Suspense fallback={<div> Home is Loading....</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div> About is Loading....</div>}>
                <About />
            </Suspense>
        </>
    );
}
