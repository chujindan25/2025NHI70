import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import Menu1 from "../Routes/Menu1";
import Menu2 from "../Routes/Menu2";

import Menu5 from "../Routes/Menu5";
import Menu6 from "../Routes/Menu6";
import Menu7 from "../Routes/Menu7";
import Talk2 from "../Routes/talk2";
import Talk3 from "../Routes/talk3";
import Talk4 from "../Routes/talk4";
import Talk5 from "../Routes/talk5";
import Talk6 from "../Routes/talk6";
import Talk7 from "../Routes/talk7";
import Seat from "../Routes/Seat";


const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/programs" element={<Menu1 />} />
                <Route exact path="/chujindanMembers" element={<Menu2 />} />
                <Route exact path="/talk" element={<Menu5 />} />
                <Route exact path="/guide" element={<Menu6 />} />
                <Route exact path="/clubAd" element={<Menu7 />} />

                <Route exact path="/whereIsMySeat" element={<Seat />} />

                <Route exact path="/talk2" element={<Talk2 />} />
                <Route exact path="/talk3" element={<Talk3 />} />
                <Route exact path="/talk4" element={<Talk4 />} />
                <Route exact path="/talk5" element={<Talk5 />} />
                <Route exact path="/talk6" element={<Talk6 />} />
                <Route exact path="/talk7" element={<Talk7 />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;