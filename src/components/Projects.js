import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export const projects = [
    { what: "This project is a clone of Disney+ website. This was my first experience with Redux.js, I used it to store the movies that I received from Firebase and also for storing errors and user’s data. Also for styling I used Styled-Components for the first time. In this project, you can sign up, log in or log out. You also can use Google for logging in. Then you’ll be in your home page, where you can find movies and series, also you can go to the detail page of each movie.", img: "/images/disney-plus-clone.jpg", name: "Disney+ Clone", description: "This project is a clone of Disney+ website. You can sign up, log in or log out. You also can use Google for logging in. Then you’ll be in your home page, where you can find movies and series, also you can go to their detail page of each movie.", github: "https://github.com/v-amirrr/disney-plus-clone", demo: "https://disney-react.netlify.app/", url: "1", technologies: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg", "/images/react.svg", "/images/react-router-dom.svg", "/images/firebase.svg", "/images/framer-motion.png", "/images/styled-components.svg"] },
    { what: "In this project you can create an account and log in with it. Then you can put your transactions into the app.Each transaction has a name, a number and a delete button. Name is for what you've spent on and number is for how much you've spent on and delete button for deleting that transaction. Also, you can log out or create another account and put different transactions on each of them. Transactions on each account will be stored in Firebase and it will remain after you log out and if you close the app, you'll remain logged in when you open it again.", img: "/images/finance-tracker.jpg", name: "Finance Tracker", description: "This project gives the ability to create an account and login with it, then put your transactions in it. You can also delete your transactions.", github: "https://github.com/v-amirrr/finance-tracker", demo: "https://finance-tracker-react.netlify.app/", url: "2", technologies: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg", "/images/react.svg", "/images/react-router-dom.svg", "/images/firebase.svg", "/images/framer-motion.png"] },
    { what: "In this project you can add your recipes and see them in the home page. Each recipe you build has its own detail page where you can see that recipe with more space and more information. Also, there is a page for building a recipe and adding it to the home page. When you want to create a recipe you can add a title, ingredients, a method and time. Also, you can switch between light and dark mode.", img: "/images/recipe-directory.jpg", name: "Recipe Directory", description: "In this project you can add your recipes, also you can watch each of your recipes with more details in their own detail page. This project has a dark and light theme and you can switch between them.", github: "https://github.com/v-amirrr/recipe-directory", demo: "https://recipe-directory.netlify.app/", url: "3", technologies: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg", "/images/react.svg", "/images/react-router-dom.svg", "/images/framer-motion.png"] },
    { what: "In this project there are 12 images and 6 of them are the same and you have to find the similar images and match them together. This project is built with React.js and for styling I used pure CSS.", img: "/images/memory-game.jpg", name: "Memory Game", description: "In this game there are 12 images and 6 of them are the same and you have to find the similar images and match them together.", github: "https://github.com/v-amirrr/memory-game", demo: "https://memory-match-react.netlify.app/", url: "4", technologies: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg", "/images/react.svg", "/images/framer-motion.png"] },
    { what: "In this little project you can generate a random password the way you want it. You can decide whether it includes uppercase letters or lowercase letters or numbers or symbols. And then you can copy the generated password.", img: "/images/random-password-generator.jpg", name: "Password Generator", description: "With this project you can generate a random password. Also you can decide whether it includes uppercase letters or lowercase letters or numbers or symbols. And then you can copy the generated password.", github: "https://github.com/v-amirrr/random-password-generator", demo: "https://generate-random-password.netlify.app/", url: "5", technologies: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg", "/images/react.svg"] },
    { what: "This project is built with only JavaScript. I built this project to boost up my JavaScript skills and to be able to build without the frameworks. In this project you can see the current time both digital and analog. And also, it has a stopwatch and a timer. This project has light and dark modes too.", img: "/images/clock.jpg", name: "Clock", description: "This project has 3 parts. A digital, analog clock, a stopwatch, and a timer. Also you can switch between dark and light themes.", github: "https://github.com/v-amirrr/Clock", demo: "https://v-amirrr.github.io/Clock/", url: "6", technologies: ["/images/html.svg", "/images/css.svg", "/images/javascript.svg"] },
    // { img: "images/disney-plus-clone.jpg", name: "Portfolio", description: "", github: "https://github.com/v-amirrr/portfolio", demo: "https://amirvalizadeh.netlify.app/", url: "7" },
];

const projectsPageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween', when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween', when: "afterChidren" } }
};

const contentVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.05 } }
};

const projectVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4, type: 'tween' } }
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
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 1300px) {
        overflow-y: scroll;
        overflow-x: hidden;
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