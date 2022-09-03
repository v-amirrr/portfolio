import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from "react-router-dom";

import { projects } from '../projectsData';

import { BiArrowBack } from 'react-icons/bi';
import { TbCornerDownRight } from 'react-icons/tb';
import { SiGithub } from 'react-icons/si';
import { AiFillCaretRight } from 'react-icons/ai';

import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, type: 'tween' } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2, type: 'tween' } }
};

const toggleSectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 5, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const ProjectPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    
    const [techShow, setTechShow] = useState(false);
    const [whatShow, setWhatShow] = useState(false);
    const [howShow, setHowShow] = useState(false);
    const [whyShow, setWhyShow] = useState(false);

    useEffect(() => {
        setData(null);
        projects.map(item => {
            if (item.url == id) {
                setData(item);
            }
        });
    }, [id]);

    const setTechShowTrue = () => {
        setTechShow(prevState => !prevState);
        setWhatShow(false);
        setHowShow(false);
        setWhyShow(false);
    };

    const setWhatShowTrue = () => {
        setTechShow(false);
        setWhatShow(prevState => !prevState);
        setHowShow(false);
        setWhyShow(false);
    };
    
    const setHowShowTrue = () => {
        setTechShow(false);
        setWhatShow(false);
        setHowShow(prevState => !prevState);
        setWhyShow(false);
    };
    
    const setWhyShowTrue = () => {
        setTechShow(false);
        setWhatShow(false);
        setHowShow(false);
        setWhyShow(prevState => !prevState);
    };

    return (
        <>
            {
                data
                &&
                <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                    <Content img={data.image}>
                        
                        <img className='background' src={data.image} alt={data.title} />

                        <Title>
                            <h1>{data.title}</h1>
                            <motion.div className='back-button' whileTap={{ scale: 0.8 }} onClick={() => navigate(-1)}>
                                <div>
                                    <i><BiArrowBack /></i>
                                    <p>back to previous page</p>
                                </div>
                            </motion.div>
                        </Title>

                        <div className='toggle-sections'>
                            <ToggleSection show={techShow}>
                                <div className='title' onClick={setTechShowTrue}>
                                    <i><AiFillCaretRight /></i>
                                    <h4>technologies</h4>
                                </div>
                                <AnimatePresence>
                                    {
                                        techShow
                                        &&
                                        <motion.div className='images' initial='hidden' animate='visible' exit='exit' variants={toggleSectionVariants}>
                                            {
                                                data.technologies.map(tech => (
                                                    <img src={tech} />
                                                ))
                                            }
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </ToggleSection>

                            <ToggleSection show={whatShow}>
                                <div className='title' onClick={setWhatShowTrue}>
                                    <i><AiFillCaretRight /></i>
                                    <h4>what is this project?</h4>
                                </div>
                                <AnimatePresence>
                                    {
                                        whatShow
                                        &&
                                        <motion.div className='text' initial='hidden' animate='visible' exit='exit' variants={toggleSectionVariants}>
                                            {data.what}
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </ToggleSection>

                            <ToggleSection show={howShow}>
                                <div className='title' onClick={setHowShowTrue}>
                                    <i><AiFillCaretRight /></i>
                                    <h4>how can you use this project?</h4>
                                </div>
                                <AnimatePresence>
                                    {
                                        howShow
                                        &&
                                        <motion.div className='text' initial='hidden' animate='visible' exit='exit' variants={toggleSectionVariants}>
                                            {data.how}
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </ToggleSection>

                            <ToggleSection show={whyShow}>
                                <div className='title' onClick={setWhyShowTrue}>
                                    <i><AiFillCaretRight /></i>
                                    <h4>why did I build this project?</h4>
                                </div>
                                <AnimatePresence>
                                    {
                                        whyShow
                                        &&
                                        <motion.div className='text' initial='hidden' animate='visible' exit='exit' variants={toggleSectionVariants}>
                                            {data.why}
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </ToggleSection>
                        </div>

                        <ExternalLink>
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
    z-index: 9;
    font-family: 'Outfit', sans-serif;
`;

const Content = styled.div`
    background-color: #000000aa;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    .background {
        position: absolute;
        inset: 0 0 0 0;
        width: 100%;
        height: 100%;
        z-index: -9;
        filter: blur(10px);
    }

    .toggle-sections {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: 8rem 0 3rem 0;
    }
`;

const Title = styled.div`
    padding: 1rem;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    h1 {
        letter-spacing: -2px;
        word-spacing: 5px;
        white-space: nowrap;
        font-size: 2rem;
        font-weight: 900;
        color: #eee;
        text-shadow: #00000055 0px 4px 12px;

        @media (max-width: 745px) {
            font-size: 1.5rem;
            letter-spacing: -1px;
        }
    }

    .back-button {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        margin: .8rem;
        color: #aaa;
        background-color: #ffffff15;
        cursor: pointer;
        border-radius: 40px;
        transition: padding .3s;

        @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
            &:hover {
                padding-right: 10.5rem;
    
                p {
                    left: 130%;
                    opacity: 1;
                }
            }
        }

        div {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                font-size: 1.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                transition: font-size .3s;
            }
        
            p {
                text-transform: capitalize;
                word-spacing: 2px;
                letter-spacing: -1px;
                font-weight: 600;
                position: absolute;
                left: 50%;
                opacity: 0;
                white-space: nowrap;
                transition: opacity .2s, left .3s;
            }
        }
    }
`;

const ToggleSection = styled.div`
    width: 100%;
    height: ${props => props.show ? "8rem" : "1.5rem"};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    position: relative;
    transition: height .3s;

    .title {
        text-transform: uppercase;
        color: ${props => props.show ? "#ddd" : "#666"};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        user-select: none;
        cursor: pointer;
        transition: color .4s;
        white-space: nowrap;

        h4 {
            font-size: 1.2rem;
            letter-spacing: -1px;
            word-spacing: 5px;
        }

        i {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            margin-right: .4rem;
            transform: ${props => props.show ? "rotate(90deg)" : "rotate(0deg)"};
            transition: transform .2s;
        }
    }

    .text {
        font-size: 1rem;
        font-weight: 300;
        word-spacing: 5px;
        width: 60%;
        text-align: center;
        color: #999;
    }

    .images {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        position: absolute;
        top: 20%;

        img {
            width: 2rem;
            margin: 0 .2rem;
            
            @media (max-width: 745px) {
                width: 1.5rem;
                margin: 0 .1rem;
            }
        }
    }

    @media (max-width: 1000px) {
        .text {
            font-size: .8rem;
            width: 80%;
        }
    }

    @media (max-width: 540px) {
        .title {
            h4 {
                font-size: 1rem;
            }
        }

        .text {
            font-size: .7rem;
            width: 90%;
        }
    }

    @media (max-width: 400px) {
        height: ${props => props.show ? "7.5rem" : "1.5rem"};

        .title {
            h4 {
                font-size: .9rem;
            }
        }

        .text {
            font-size: .6rem;
            width: 100%;
        }
    }
`;

const ExternalLink = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    div {
        width: 12rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff08;
        border: solid 1px #ffffff11;
        border-radius: 10px;
        cursor: pointer;
        color: #c1c1c1;
        white-space: nowrap;
        padding: .5rem 0;
        margin: 0 .8rem;
        transition: background .2s;

        @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
            &:hover {
                background-color: #ffffff11;
            }
        }
        
        i {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: .3rem;
            font-size: 1.5rem;
        }

        p {
            text-transform: capitalize;
            letter-spacing: -1px;
            word-spacing: 2px;
            font-weight: 600;
        }
    }
    
    @media (max-width: 600px) {
        flex-direction: column;

        div {
            margin: .4rem 0;
            width: 13rem;
        }
    }
        
    @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
        margin-bottom: 3rem;
    }
`;

export default ProjectPage;