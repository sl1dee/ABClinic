import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Header from "./Bars/Header/Header";
import Footer from "./Bars/Footer/Footer";
import MakeRecord from "./Components/Modals/MakeRecord/MakeRecord";

export default function App(){
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/">
                        <Route index element={<Main/>}/>
                    </Route>
                </Routes>
            </main>
            <Footer/>
            <MakeRecord/>
        </>
    )
}