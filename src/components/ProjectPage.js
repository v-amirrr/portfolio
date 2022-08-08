import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from "react-router-dom";

import styled from 'styled-components';

import { IoIosArrowBack } from 'react-icons/io';
import { TbCornerDownRight } from 'react-icons/tb';
import { SiGithub } from 'react-icons/si';

import { projects } from './Projects';

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const contentVariants = {
    visible: { transition: { staggerChildren: 0.2 } }
};

const projectItemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4, type: 'tween' } }
};

const ProjectPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        projects.map(item => {
            if (item.url == id) {
                setData(item);
            }
        });
    }, [id]);

    return (
        <>
            {
                data
                &&
                <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                    <Content variants={contentVariants} img={data.img}>

                        <img className='background' src={data.img} alt="background" />

                        <Title variants={projectItemVariants}>
                            <div>
                                <motion.i whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} onClick={() => navigate(-1)}><IoIosArrowBack /></motion.i>
                                <h1>{data.name}</h1>
                            </div>
                        </Title>

                        <Tech variants={projectItemVariants}>
                            <h4>technologies</h4>
                            <span>
                                {
                                    data.technologies.map(item => (
                                        <img src={item} alt="technology" />
                                    ))
                                }
                            </span>
                        </Tech>

                        <Text variants={projectItemVariants}>
                            <h4>description</h4>
                            <p>{data.description}</p>
                        </Text>

                        <ExternalLink variants={projectItemVariants}>
                            <a href={data.github} target="_blank">
                                <motion.div whileTap={{ scale: 0.8 }}>
                                    <i><SiGithub /></i>
                                    <p>GitHub Repository</p>
                                </motion.div>
                            </a>

                            <a href={data.demo} target="_blank">
                                <motion.div whileTap={{ scale: 0.8 }}>
                                    <i><TbCornerDownRight /></i>
                                    <p>Live Demo</p>
                                </motion.div>
                            </a>
                        </ExternalLink>
                    </Content>
                </Page>
            }
        </>
    );
};

const Page = styled(motion.section)`
    position: absolute;
    inset: 0 0 0 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000000dd;
    z-index: 999;
    font-family: 'Outfit', sans-serif;
`;

const Content = styled(motion.div)`
    height: max-content;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(20px) saturate(100%);
    -webkit-backdrop-filter: blur(16px) saturate(100%);
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;

    .background {
        position: absolute;
        inset: 0 0 0 0;
        width: 100%;
        height: 100%;
        z-index: -9;
        filter: blur(20px);
        opacity: 0.4;
    }
`;

const Title = styled(motion.div)`
    padding: 1rem;
    width: 100%;
    margin-bottom: 1rem;

    @media (max-width: 745px) {
        position: absolute;
        top: 0;
        background-color: #ffffff11;
        border-radius: 0 0 30px 30px;
        backdrop-filter: blur(16px) saturate(100%);
        -webkit-backdrop-filter: blur(16px) saturate(100%);
    }

    div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;

        h1 {
            letter-spacing: -2px;
            word-spacing: 10px;
            white-space: nowrap;
            font-size: 2rem;

            @media (max-width: 745px) {
                font-size: 1.5rem;
                letter-spacing: -1px;
            }
        }

        i {
            font-size: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 20%;
            cursor: pointer;
            border-radius: 50%;
            padding: .1rem;

            @media (max-width: 745px) {
                left: 0;
                font-size: 1.8rem;
            }
        }
    }
`;

const ExternalLink = styled(motion.div)`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: #ffffff11;
        border: 1px solid #ffffff09;
        border-radius: 10px;
        padding: .5rem;
        margin: 0 .2rem;
        cursor: pointer;
        color: #c1c1c1;
        white-space: nowrap;
        transition: background .4s;

        &:hover {
            background-color: #ffffff05;
        }

        @media (max-width: 600px) {
            padding: 0;
            margin: .4rem 0;
            width: 9rem;
            height: 2.5rem;
            font-size: .8rem;
        }

        i {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            margin-right: .3rem;
            font-size: 1.5rem;

            @media (max-width: 400px) {
                font-size: 1.2rem;
            }
        }

        p {
            font-weight: 600;
        }
    }
`;

const Tech = styled(motion.div)`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;

    h4 {
        text-transform: uppercase;
        color: #c1c1c1;
        margin-bottom: .5rem;
    }

    span {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 2rem;
            margin: 0 .2rem;

            @media (max-width: 745px) {
                width: 1.5rem;
                margin: 0 .1rem;
            }
        }
    }
`;

const Text = styled(motion.div)`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;

    h4 {
        text-transform: uppercase;
        color: #c1c1c1;
        margin-bottom: .5rem;
    }

    p {
        font-size: .8rem;
        width: 50%;
        text-align: center;

        @media (max-width: 745px) {
            width: 100%;
        }
    }
`;

export default ProjectPage;