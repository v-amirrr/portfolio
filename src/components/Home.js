import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" } }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, type: 'tween' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2, type: 'tween' } }
};

const socialMediaVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.2 } }
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
                            <p>see my resume</p>
                        </motion.div>
                    </a>
                </Buttons>

                <SocialMedia variants={socialMediaVariants}>
                    <hr />
                    <a href='https://github.com/v-amirrr' target="_blank" >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <img src="/images/github.svg" />
                        </motion.div>
                    </a>
                    <hr />
                    <a href='https://linkedin.com/in/amirvalizadeh' target="_blank" >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <img src="/images/linkedin.svg" />
                        </motion.div>
                    </a>
                    <hr />
                    <a href='https://t.me/v_amirrr' target="_blank" >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <img src="/images/telegram.svg" />
                        </motion.div>
                    </a>
                    <hr />
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
    margin-bottom: 1.2rem;
    font-family: 'Outfit', sans-serif;
    line-height: .9;
    white-space: nowrap;

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

    div {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 500;
        border: solid 2px #ffffff10;
        border-radius: 15px;
        word-spacing: 2px;
        letter-spacing: -1px;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        padding: .7rem 6rem;
        background-color: #00000022;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background .4s, border .4s, color .4s, padding .4s, letter-spacing .4s;
        box-shadow: #00000055 0px 5px 10px;
        color: #aaa;
        
        p {
            text-shadow: #000 0px 12px 12px;
        }

        @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
            &:hover {
                color: #ccc;
                background-color: #ffffff02;
                border: solid 2px #ffffff15;
                padding: .7rem 7rem;
                letter-spacing: 1px;
            }
        }

        @media (max-width: 900px) {
            padding: .7rem 5rem;
            font-size: 1rem;
        }
    }
`;

const SocialMedia = styled(motion.div)`
    position: absolute;
    left: 0;
    margin: 1rem;
    width: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        bottom: 0;
        flex-direction: row;
        margin: 1rem 0;
        width: 100%;
        height: 2rem;
    }

    hr {
        transform: rotate(90deg);
        width: 1rem;
        height: 1px;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.20));
        border: none;

        @media (max-width: 768px) {
            transform: rotate(0deg);
            width: 5%;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10));
        }

        &:first-child {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.30));
            width: 3rem;
            margin-bottom: 1rem;

            @media (max-width: 768px) {
                margin: 0;
                width: 15%;
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.20));
            }
        }

        &:last-child {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0));
            width: 3rem;
            margin-top: 1rem;

            @media (max-width: 768px) {
                margin: 0;
                width: 15%;
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0));
            }
        }
    }

    div {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 2rem;
        height: 2rem;
        margin: .5rem 0;
        cursor: pointer;
        backdrop-filter: blur(20px) saturate(165%);
        -webkit-backdrop-filter: blur(20px) saturate(165%);
        background-color: #00000055;
        border: solid 1px #ffffff22;
        transition: background-color .4s, border .4s;
        overflow: hidden;

        img {
            width: 3rem;
        }

        @media (max-width: 768px) {
            margin: 0;
            width: 1.8rem;
            height: 1.8rem;
        }
    }
`;

export default Home;