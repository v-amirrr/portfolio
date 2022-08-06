import React, { useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import styled from 'styled-components';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';

const App = () => {

    const location = useLocation();

    useEffect(() => {
        localStorage.setItem("lan", "en");
    }, []);

    return (
        <>
            <Navbar />
            <Background><img src='images/bg2.jpg' /></Background>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<ProjectPage />} />
                </Routes>
            </AnimatePresence>
        </>
    );
};

const Background = styled.div`
    position: absolute;
    inset: 0 0 0 0;
    z-index: -9;
    
    img {
        filter: blur(50px);
        width: 100%;
        height: 100%;
        z-index: -10;
    }
`;

export default App;