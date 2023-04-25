import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import MainScreenComponent from './views/mainPage/mainScript';
import ContactScreenComponent from './views/contactPage/contactScript';
import AboutScreenComponent from './views/aboutPage/aboutScript';
import ProjectScreenComponent from './views/projectsPage/projectScript';

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
