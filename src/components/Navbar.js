import React, { useState } from 'react';

import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = () => {

    const location = useLocation();

    const [hovered, setHovered] = useState(0);
    const [hoveredLeave, setHoveredLeave] = useState(true);

    return (
        <>
            <Nav hovered={hovered} hoveredleave={hoveredLeave ? 1 : 0} selected={location.pathname == "/" ? 1 : location.pathname == "/projects" ? 2 : location.pathname == "/about-me" ? 3 : location.pathname == "/contact" ? 4 : 2} onMouseOut={() => setHoveredLeave(true)} onMouseOver={() => setHoveredLeave(false)}>
                <div className='navbar-select'></div>
                <div className='navbar-hover'></div>
                <Link to="/">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/" ? "active" : ""} onMouseOver={() => setHovered(1)}>home</motion.div>
                </Link>
                <Link to="/projects">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/projects" ? "active" : ""} onMouseOver={() => setHovered(2)}>projects</motion.div>
                </Link>
                <Link to="/about-me">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/about-me" ? "active" : ""} onMouseOver={() => setHovered(3)}>about me</motion.div>
                </Link>
                <Link to="/contact">
                    <motion.div whileTap={{ scale: 0.8 }} className={location.pathname == "/contact" ? "active" : ""} onMouseOver={() => setHovered(4)}>contact</motion.div>
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
    width: 18.9rem;
    height: 3rem;
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
        transition: width .8s cubic-bezier(.53,0,0,.98), left .5s cubic-bezier(.53,0,0,.98);
    }

    .navbar-hover {
        position: absolute;
        height: ${props => props.hoveredleave ? "0" : "2.2rem"};
        width: ${props => 
            props.hovered == 1 ? "2.95rem" : 
            props.hovered == 2 ? "4.4rem" : 
            props.hovered == 3 ? "4.7rem" : 
            props.hovered == 4 ? "4.2rem" : ""
        };
        left: ${props => 
            props.hovered == 1 ? ".95rem" : 
            props.hovered == 2 ? "4.2rem" : 
            props.hovered == 3 ? "8.8rem" : 
            props.hovered == 4 ? "13.7rem" : ""
        };
        border-radius: 10px;
        background-color: #e6e6e607;
        transition: width .3s, left .3s, height .2s;
    }

    div {
        padding: 0 .6rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #aaa;
        transition: color .4s, padding .4s, letter-spacing .4s;
        white-space: nowrap;
        z-index: -1;
    }

    .active {
        color: #fff;
    }
`;

export default Navbar;