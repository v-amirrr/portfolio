import React, { useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from './components/Home';

const App = () => {

    const location = useLocation();

    useEffect(() => {
        localStorage.setItem("lan", "en");
    }, []);

    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;