import React from 'react';

import LinkdInIcon from "../assets/images/linkedin.svg";
import GitHubIcon from "../assets/images/github.svg";

import styled from 'styled-components';
import { motion } from 'framer-motion';

const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.2, when: "afterChildren" } }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, type: 'tween' } }
};

const socialMediaVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.4 } }
};

const Home = () => {
    return (
        <>
            <HomePage initial='hidden' animate='visible' exit='exit' variants={contentVariants}>
                <Title>
                    <motion.h1 className='title-text' variants={itemVariants}>
                        <span>M</span>
                        <span>y </span>
                        <span>N</span>
                        <span>a</span>
                        <span>m</span>
                        <span>e </span>
                        <span>I</span>
                        <span>s</span>

                        <div className='title-name'>
                            <span>A </span>
                            <span>M</span>
                            <span>I</span>
                            <span>R</span>
                        </div>

                        <span>.</span>
                    </motion.h1>

                    <motion.h1 className='title-text' variants={itemVariants}>
                        <span>I</span>
                        <span>'</span>
                        <span>m </span>
                        <span>a</span>

                        <div className='title-field'>
                            <span>F</span>
                            <span>R</span>
                            <span>O</span>
                            <span>N</span>
                            <span>T</span>
                            <span>-</span>
                            <span>E</span>
                            <span>N</span>
                            <span>D</span>
                        </div>

                        <span>d</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                        <span>.</span>
                    </motion.h1>
                </Title>

                <Buttons variants={itemVariants}>
                    <a href='https://drive.google.com/file/d/1wZJ0K-Fez_pX9yQO2U_INKqFZbfSclMm/view?usp=sharing' target="_blank">
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <p>check out my resume</p>
                        </motion.div>
                    </a>
                </Buttons>

                <SocialMedia variants={socialMediaVariants}>
                    <a href='https://github.com/v-amirrr' target="_blank" rel="noopener noreferror">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <img src={GitHubIcon} />
                        </motion.div>
                    </a>

                    <a href='https://linkedin.com/in/amirvalizadeh' target="_blank" rel="noopener noreferror">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <img src={LinkdInIcon} />
                        </motion.div>
                    </a>
                </SocialMedia>
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
    font-family: 'Outfit', sans-serif;
    line-height: .9;
    white-space: nowrap;
    margin-top: 2rem;

    span {
        transition: color .2s;
        
        &:hover {
            color: #fff;
        }
    }

    .title-text {
        font-size: 1.1rem;
        font-weight: 200;
        word-spacing: 2px;
        color: #88888888;
        display: inline;
    }
    
    .title-name {
        display: inline;
        font-size: 9.2rem;
        font-weight: 900;
        letter-spacing: -1.16rem;
        color: #88888859;
        text-shadow: #00000059 0px 4px 12px;
        margin-left: .2rem;
        margin-right: 1rem;

        span {
            transition: color .2s;
            &:hover {
                color: #888;
            }
        }
    }

    .title-field {
        display: inline;
        font-size: 3.4rem;
        font-weight: 900;
        letter-spacing: -.3rem;
        color: #88888833;
        text-shadow: #00000055 0px 4px 12px;
        margin: 0 .2rem;

        span {
            transition: color .2s;
            &:hover {
                color: #888;
            }
        }
    }

    @media (max-width: 600px) {
        margin-top: -1.5rem;
        
        .title-text {
            font-size: .8rem;
            word-spacing: 1px;
        }
        
        .title-name {
            font-size: 6.5rem;
            letter-spacing: -.8rem;
        }

        .title-field {
            font-size: 2.5rem;
            letter-spacing: -.2rem;
            margin: 0 .5rem;
        }
    }
`;

const Buttons = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Outfit', sans-serif;
    padding: 1rem;

    div {
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 200;
        border: solid 1px #ffffff08;
        border-radius: 10px;
        word-spacing: 2px;
        padding: .7rem 1rem;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        background-color: #00000022;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color .4s, letter-spacing .4s;
        box-shadow: #00000055 0px 5px 10px;
        color: #888888cc;
        background-color: #ffffff02;

        @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
            &:hover {
                letter-spacing: 1px;
                color: #aaa;
            }
        }

        @media (max-width: 800px) {
            background-color: #ffffff02;
            padding: .7rem .8rem;
        }
    }
`;

const SocialMedia = styled(motion.div)`
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        margin: .5rem 0;
        cursor: pointer;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
    
    @media (max-width: 900px) {
        bottom: 0;
        flex-direction: row;
        margin: 1rem 0;
        height: 2rem;
        width: 100%;

        div {
            width: 2.5rem;
            margin: 0;
        }
    }
`;

export default Home;