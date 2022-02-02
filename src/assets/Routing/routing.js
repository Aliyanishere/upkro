import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Web from '../components/web';
import Whitepaper from '../components/whitepaper';
import Minting from '../components/minting';

const Routing = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="*" element={<Web />} />
                    <Route exact path="/" element={<Web />} />
                    <Route exact path="/whitepaper" element={<Whitepaper />} />
                    <Route exact path="/minting" element={<Minting />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Routing;
