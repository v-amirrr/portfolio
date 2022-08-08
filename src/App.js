import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import styled from 'styled-components';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import AboutMe from './components/AboutMe';

const App = () => {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <Background><img src='images/bg.webp' /></Background>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/projects/:id' element={<ProjectPage />} />
                    <Route path='/about-me' element={<AboutMe />} />
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
        filter: blur(20px);
        width: 100%;
        height: 100%;
        z-index: -10;
    }
`;

export default App;