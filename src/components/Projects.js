import React from 'react';

import styled from 'styled-components';

import { Link, Outlet } from 'react-router-dom';

import { TbCornerDownRight } from 'react-icons/tb';
import { SiGithub } from 'react-icons/si';

import { motion } from 'framer-motion';

export const projects = [
    { img: "images/disney-plus-clone.jpg", name: "Disney+ Clone", description: "This project is a clone of Disney+ website. You can sign up, log in or log out. You also can use Google for logging in. Then you’ll be in your home page, where you can find movies and series, also you can go to their detail page of each movie.", github: "https://github.com/v-amirrr/disney-plus-clone", demo: "https://disney-react.netlify.app/", url: "1" },
    { img: "images/finance-tracker.jpg", name: "Finance Tracker", description: "This project gives the ability to create an account and login with it, then put your transactions in it. You can also delete your transactions.", github: "https://github.com/v-amirrr/finance-tracker", demo: "https://finance-tracker-react.netlify.app/", url: "2" },
    { img: "images/recipe-directory.jpg", name: "Recipe Directory", description: "In this project you can add your recipes, also you can watch each of your recipes with more details in their own detail page. This project has a dark and light theme and you can switch between them.", github: "https://github.com/v-amirrr/recipe-directory", demo: "https://recipe-directory.netlify.app/", url: "3" },
    { img: "images/memory-game.jpg", name: "Memory Game", description: "In this game there are 12 images and 6 of them are the same and you have to find the similar images and match them together.", github: "https://github.com/v-amirrr/memory-game", demo: "https://memory-match-react.netlify.app/", url: "4" },
    { img: "images/random-password-generator.jpg", name: "Password Generator", description: "With this project you can generate a random password. Also you can decide whether it includes uppercase letters or lowercase letters or numbers or symbols. And then you can copy the generated password.", github: "https://github.com/v-amirrr/random-password-generator", demo: "https://generate-random-password.netlify.app/", url: "5" },
    { img: "images/clock.jpg", name: "Clock", description: "This project has 3 parts. A digital, analog clock, a stopwatch, and a timer. Also you can switch between dark and light themes.", github: "https://github.com/v-amirrr/Clock", demo: "https://v-amirrr.github.io/Clock/", url: "6" },
    // { img: "images/disney-plus-clone.jpg", name: "Portfolio", description: "", github: "https://github.com/v-amirrr/portfolio", demo: "https://amirvalizadeh.netlify.app/", url: "7" },
];

const projectsPageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween', when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween', when: "afterChidren" } }
};

const Projects = () => {
    return (
        <>
            <ProjectsPage initial='hidden' animate='visible' exit='exit' variants={projectsPageVariants}>
                  <Content>
                    {
                        projects.map(item => (
                            <Link to={"/project/" + item.url}>
                            <Project whileTap={{ scale: 0.8 }}>
                                <img src={item.img} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                    <span>CLICK FOR MORE DETAIL</span>
                                </div>
                            </Project>
                            </Link>
                        ))
                    }
                  </Content>
                  <Outlet />
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
    background-color: #000000bb;
`;

const Content = styled(motion.div)`
    position: relative;
    width: 80%;
    height: 80%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    scroll-behavior: smooth;

    @media (max-width: 1300px) {
        overflow-y: scroll;
        overflow-x: hidden;
        width: 90%;
        height: 90%;
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
    box-shadow: #00000033 0px 4px 12px;
    border: solid 1px #ffffff11;
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
            font-weight: 600;
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
        transform: scale(1) !important;

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