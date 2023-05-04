import React, { useState } from 'react';

import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = () => {

    const location = useLocation();

    return (
        <>
            <Nav selected={location.pathname == "/" ? 1 : location.pathname == "/projects" ? 2 : location.pathname == "/about-me" ? 3 : location.pathname == "/contact" ? 4 : 2}>
                <div className='navbar-select'></div>
                <Link to="/">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/" ? "active" : ""}>home</motion.div>
                </Link>
                <Link to="/projects">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/projects" ? "active" : ""}>projects</motion.div>
                </Link>
                <Link to="/about-me">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/about-me" ? "active" : ""}>about me</motion.div>
                </Link>
                <Link to="/contact">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/contact" ? "active" : ""}>contact</motion.div>
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
    top: .5rem;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 1rem .8rem;
    border-radius: 10px;
    background-color: #e6e6e602;
    box-shadow: #00000011 0px 4px 12px;
    border: solid 1px #ffffff10;

    .navbar-select {
        position: absolute;
        margin-top: 1.2rem;
        width: ${props => 
            props.selected == 1 ? "2.1rem" : 
            props.selected == 2 ? "3.4rem" : 
            props.selected == 3 ? "3.7rem" : 
            props.selected == 4 ? "3.2rem" : ""
        };
        left: ${props => 
            props.selected == 1 ? "1.4rem" : 
            props.selected == 2 ? "4.7rem" : 
            props.selected == 3 ? "9.3rem" : 
            props.selected == 4 ? "14.2rem" : ""
        };
        height: .2rem;
        border-radius: 50px;
        background-color: #e6e6e6;
        transition: width 1s cubic-bezier(.53,0,0,.98), left 1s cubic-bezier(.53,0,0,.98);
    }
    
    div {
        padding: 0 .6rem;
        cursor: pointer;        
        color: #aaa;
        transition: color .4s, padding .4s, letter-spacing .4s;
        white-space: nowrap;

        @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
            &:hover {
                /* padding: 0 .8rem; */
                /* letter-spacing: 2px; */
            }
        }
        
        @media (max-width: 500px) {
            padding: 0 .4rem;
        }
    }

    @media (max-width: 500px) {
        .navbar-select {
            left: ${props => 
                props.selected == 1 ? "1.2rem" : 
                props.selected == 2 ? "4.15rem" : 
                props.selected == 3 ? "8.3rem" : 
                props.selected == 4 ? "12.8rem" : ""
            };
        }
    }

    .active {
        color: #fff;
    }
`;

export default Navbar;