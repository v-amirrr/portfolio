import React, { useEffect, useState } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

import styled from 'styled-components';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const App = () => {

    const location = useLocation();

    const [widthSize, setWidthSize] = useState(document.documentElement.offsetWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidthSize(document.documentElement.offsetWidth);
        });
    }, []);

    return (
        <>
            <Navbar />

            <AnimatePresence>
            {
                widthSize >= 600
                ?
                    location.pathname == "/" || location.pathname == "/about-me"
                    ?
                        <Background initial='hidden' animate='visible' exit='exit' variants={bgVariants} key="home"><img src='/images/bg-home-desktop.webp' /></Background>
                    :
                        <Background initial='hidden' animate='visible' exit='exit' variants={bgVariants} key="projects"><img src='/images/bg-projects-desktop.webp' /></Background>
                :
                    location.pathname == "/" || location.pathname == "/about-me"
                    ?
                        <Background initial='hidden' animate='visible' exit='exit' variants={bgVariants} key="home"><img src='/images/bg-home-mobile.webp' /></Background>
                    :
                        <Background initial='hidden' animate='visible' exit='exit' variants={bgVariants} key="projects"><img src='/images/bg-projects-mobile.webp' /></Background>
            }
            </AnimatePresence>
            
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/projects/:id' element={<ProjectPage />} />
                    <Route path='/about-me' element={<AboutMe />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    );
};

const Background = styled(motion.div)`
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