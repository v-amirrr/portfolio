import React from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

const homePageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween', when: "beforeChildren", staggerChildren: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween', when: "afterChildren" } }
};

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const Home = () => {
    return (
        <>
            <HomePage initial='hidden' animate='visible' exit='exit' variants={homePageVariants}>
                <Title variants={titleVariants}>
                        <h1>Hi, I'm Amir.</h1>
                        <h1>I'm a Front-End developer.</h1>
                </Title>

                <Buttons variants={titleVariants}>
                    <Button whileTap={{ scale: 0.8 }}>
                        let's go
                    </Button>

                    <Button whileTap={{ scale: 0.8 }}>
                        resume
                    </Button>
                </Buttons>
            </HomePage>
        </>
    );
};

const HomePage = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    
    h1 {
        font-family: 'Outfit', sans-serif;
        line-height: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        
        &:nth-child(1) {
            font-size: 3rem;
            word-spacing: 10px;
            letter-spacing: -2px;
            color: #fff;
        }
        
        &:nth-child(2) {
            font-size: 1rem;
            color: #f0f0f0;
            font-weight: 500;
        }
    }
`;

const Buttons = styled(motion.div)`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
`;

const Button = styled(motion.button)`
    all: unset;
    font-family: 'Outfit', sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-radius: 10px;
    width: 8rem;
    height: 3rem;
    word-spacing: 5px;
    letter-spacing: -1px;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    margin: 0 1rem;    
    backdrop-filter: blur(10px) saturate(150%);
    -webkit-backdrop-filter: blur(10px) saturate(150%);
    background-color: #00000055;
    transition: background-color .4s, box-shadow .4s, border .4s;
    box-shadow: #00000011 0px 4px 12px;
    border: solid 1px #ffffff11;
    
    &:hover {
        background-color: #ffffff11;
        border: solid 1px #ffffff19;
        box-shadow: #00000088 0px 4px 12px;
    }

    &:first-child {
        font-weight: 900;
    }
    
    &:last-child {
        font-weight: 300;
    }
`;

export default Home;