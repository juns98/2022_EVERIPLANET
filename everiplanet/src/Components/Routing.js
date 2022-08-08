import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Factory from "./Pages/Factory";

function Routing() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/factory' element={<Factory/>}></Route>
                {/* <Route ></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
