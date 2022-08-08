import React from 'react';

import styled from 'styled-components';

import { useLocation, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Navbar = () => {

    const location = useLocation();

    return (
        <>
            <Nav>
                <Link to="/">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/" ? "active" : ""}>home</motion.div>
                </Link>
                <Link to="/projects">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/projects" ? "active" : ""}>projects</motion.div>
                </Link>
                <Link to="/about-me">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/about-me" ? "active" : ""}>about me</motion.div>
                </Link>
                <Link to="/">
                    <motion.div whileTap={{ scale: 0.8 }}>contact</motion.div>
                </Link>
            </Nav>
        </>
    );
};

const Nav = styled(motion.nav)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-family: 'Outfit', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    word-spacing: 2px;
    font-size: .7rem;
    cursor: pointer;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 1rem;
    border-radius: 0 0 10px 10px;
    background-color: #e6e6e608;
    box-shadow: #00000011 0px 4px 12px;
    border: solid 1px #ffffff11;
    
    div {
        padding: 0 .8rem;
        cursor: pointer;        
        color: #c1c1c1;
        transition: color .4s, padding .4s, letter-spacing .4s;
        white-space: nowrap;

        @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
            &:hover {
                padding: 0 1rem;
                letter-spacing: 2px;
            }
        }
        
            @media (max-width: 500px) {
                padding: 0 .4rem;
            }
    }

    .active {
        color: #fff;
    }
`;

export default Navbar;