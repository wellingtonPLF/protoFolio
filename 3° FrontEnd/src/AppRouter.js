import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import MainScreenComponent from "./app/views/mainScreenComponent/mainScreenComponent";
import ContactScreenComponent from "./app/views/contactScreenComponent/contactScreenComponent";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <MainScreenComponent /> }  path="/" exact />
                <Route element = { <ContactScreenComponent />}  path="/contact" />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
