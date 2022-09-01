import React from 'react';

import styled from 'styled-components';

import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

const homePageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, type: 'tween', when: "beforeChildren", childrenDelay: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.2, type: 'tween', when: "afterChildren" } }
};

const titleVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.4 } }
};

const socialMediaVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.4 } }
}

const Home = () => {
    return (
        <>
            <HomePage initial='hidden' animate='visible' exit='exit' variants={homePageVariants}>
                <Title variants={titleVariants}>
                        <h1>Hi, I'm Amir.</h1>
                        <h1>I'm a Front-End developer.</h1>
                </Title>

                <Buttons variants={titleVariants}>
                    <Link to="/projects">
                        <Button whileTap={{ scale: 0.8 }}>
                            let's go
                        </Button>
                    </Link>

                    <a href='https://drive.google.com/file/d/1wZJ0K-Fez_pX9yQO2U_INKqFZbfSclMm/view?usp=sharing' target="_blank">
                        <Button whileTap={{ scale: 0.8 }}>
                            resume
                        </Button>
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
    margin: 1rem;
    
    h1 {
        font-family: 'Outfit', sans-serif;
        line-height: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        white-space: nowrap;
        
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
    font-size: 1rem;
    font-weight: 900 !important;
    border-radius: 10px;
    width: 6rem;
    height: 2.5rem;
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
    color: #fff;
    
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