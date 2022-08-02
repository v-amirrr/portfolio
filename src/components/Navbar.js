import React from 'react';

import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';

const navbarVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: -20, scaleY: 0, transition: { duration: 0.4, type: 'tween' } }
};

const Navbar = () => {

    const location = useLocation();

    return (
        <>
            <Nav variants={navbarVariants}>
                <div className={location.pathname == "/" && "active"}>home</div>
                <div>technologies</div>
                <div>projects</div>
                <div>about me</div>
                <div>contact</div>
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
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    padding: 1.4rem 1rem;
    border-radius: 0 0 10px 10px;
    background-color: #e6e6e608;
    box-shadow: #00000011 0px 4px 12px;
    border: solid 1px #ffffff11;
    transition: border .4s;

    &:hover {
        border: solid 1px #ffffff19;
    }

    div {
        padding: 0 .8rem;
        cursor: pointer;        
        color: #c1c1c1;
        transition: color .4s, padding .4s, letter-spacing .4s;
        white-space: nowrap;

        &:hover {
            padding: 0 1rem;
            letter-spacing: 2px;
        }
    }

    .active {
        color: #fff;
    }
`;

export default Navbar;