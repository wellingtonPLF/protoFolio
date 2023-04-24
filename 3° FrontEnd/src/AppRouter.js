import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import MainScreenComponent from "./app/views/mainPage/mainScript";
import ContactScreenComponent from "./app/views/contactPage/contactScript";
import AboutScreenComponent from "./app/views/aboutPage/aboutScript";
import ProjectScreenComponent from "./app/views/projectsPage/projectScript";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <MainScreenComponent /> }  path="/" exact />
                <Route element = { <ContactScreenComponent />}  path="/contact" />
                <Route element = { <AboutScreenComponent />}  path="/about" />
                <Route element = { <ProjectScreenComponent />}  path="/projects" />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
