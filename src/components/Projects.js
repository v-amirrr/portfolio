import React from 'react';

import { Link } from 'react-router-dom';

import { projects } from '../projectsData';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const projectsPageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, type: 'tween', when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.2, type: 'tween', when: "afterChidren" } }
};

const contentVariants = {
    visible: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.03 } }
};

const projectVariants = {
    hidden: { opacity: 0, y: -50},
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, type: 'tween' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3, type: 'tween' } }
};

const Projects = () => {
    return (
        <>
            <ProjectsPage initial='hidden' animate='visible' exit='exit' variants={projectsPageVariants}>
                  <Content variants={contentVariants}>
                    {
                        projects.map(item => (
                            <Link to={"/projects/" + item.url}>
                                <Project whileTap={{ scale: 0.8 }} variants={projectVariants}>
                                    <img src={item.image} />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.what}</p>
                                        <span>CLICK FOR MORE DETAIL</span>
                                    </div>
                                </Project>
                            </Link>
                        ))
                    }
                  </Content>
            </ProjectsPage>
        </>
    );
};

const ProjectsPage = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #00000077;
`;

const Content = styled(motion.div)`
    position: relative;
    width: 80%;
    height: 80%;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden scroll;

    @media (max-width: 1300px) {
        width: 85%;
        height: 80%;
    }

    /* width */
    ::-webkit-scrollbar {
        width: .2rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 50px;
        background: #ffffff11;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ffffff44;
        border-radius: 50px;
    }
`;

const Project = styled(motion.div)`
    font-family: 'Outfit', sans-serif;
    border-radius: 10px;
    white-space: nowrap;
    margin: 1rem;
    border: solid 1px #ffffff20;
    backdrop-filter: blur(50px) saturate(200%);
    -webkit-backdrop-filter: blur(50px) saturate(2000%);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 15rem;
    height: 10rem;

    img {
        width: 100%;
        height: 100%;
        z-index: -999;
        position: absolute;
        inset: 0 0 0 0;
        border-radius: 10px;
    }

    div {
        position: absolute;
        background: linear-gradient(0deg, rgba(0,0,0,1) 50%, rgba(0,212,255,0) 120%);
        background-size: 100% 150%;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        transition: background .4s;

        h4 {
            color: #fff;
            z-index: 10;
            font-size: 1.2rem;
            position: absolute;
            bottom: .5rem;
            transition: bottom .4s, font-size .2s;
            letter-spacing: -1px;
            word-spacing: 5px;
        }

        p {
            font-size: .6rem;
            white-space: nowrap;
            overflow: hidden;
            width: 50%;
            color: #c1c1c1;
            text-overflow: ellipsis;
            position: absolute;
            bottom: 0;
            opacity: 0;
            transition: opacity .4s, bottom .4s;
        }

        span {
            position: absolute;
            bottom: 0;
            opacity: 0;
            font-size: .5rem;
            transition: opacity .4s, bottom .4s;
            font-weight: 500;
            word-spacing: 2px;
            color: #00b7ff;
        }
    }

    @media (hover: hover) and (pointer: fine) and (min-width: 745px) {
        &:hover {
            div {
                background-size: 100% 100%;
    
                h4 {
                    bottom: 5rem;
                }
    
                p {
                    opacity: 1;
                    bottom: 4rem;
                }
    
                span {
                    opacity: 1;
                    bottom: 1rem;
                }
            }
        }
    }

    @media (max-width: 745px) {
        div {
            background-size: 100% 100%;

            h4 {
                position: relative;
                font-size: 1.5rem;
            }

            p {
                opacity: 1;
                bottom: 3.5rem;
                font-size: .4rem;
            }

            span {
                opacity: 1;
                bottom: 1rem;
            }
        }
    }
    
`;

export default Projects;