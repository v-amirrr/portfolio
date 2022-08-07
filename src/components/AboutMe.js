import React from 'react';

import styled from 'styled-components';

import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const contentVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween', delayChildren: 0.5, staggerChildren: 0.2 } },
    exit: { opacity: 1, transition: { duration: 0.4, type: 'tween' } }
};

const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4, type: 'tween' } }
};

const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4, type: 'tween' } }
};

const AboutMe = () => {
    return (
        <>
            <AboutMePage initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                <img src="/images/download.jpg" />

                <Content variants={contentVariants}>
                    <Title variants={titleVariants}>who am i?</Title>
                    <Text variants={textVariants}>
                        I'm a junior Front-End Developer. I borned and raised in Mashhad which is a !beautiful city in Iran.
                        <br />
                        I started learning web development at 2020, and it was one my best decisions throughout life.
                        <br />
                        First I learned HTML and CSS. Then I tried Bootstrap but I decided that pure CSS gives me more freedom so I sticked with that.
                        <br />
                        At that point I remeber I built some projects with HTML and CSS but since I didn't know any Git, I have no idea where those projects are.
                        <br />
                        Those projects were first time that I had to deal with responsiveness, and it was !great.
                        <br />
                        After that I learned JavaScript (still learning, ain't no end learning that shit). Then I tried some libraries for animating stuff such as Animate.CSS, Typed.js, Particles.js and ScrollReveal.js.
                        <br />
                        Also I tried jQuery to know what it is and after realizing what it is I haven't work with since.
                        <br />
                        Then I learnd Git and it was project time so I built my first professional project called <Link to="/projects/6" className='link'>CLock</Link>. This project is built only with HTML, CSS and JavaScript.
                        <br />
                        After my first project, it was time to start the real shit. So I started learning React.js. Why I choose React? Good questions.
                        <br />
                        So after trying a lot of courses I gained some knowledge about React.js. I decided to built a little project with it, just for fun. So I built <Link to="/projects/5" className='link'>Random-Password-Generator</Link>.
                        This project supposed to be a project where I practice my React skills but it really more JavaScript than React. Anywat I built it no matter what.
                        <br />
                        Then I realize that I wanted a real thing, an unique project. So I built <Link to="/projects/4" className='link'>Memory-Game</Link>. That project really helped my React skills. It was in that project that I really undrestand the use of reusable components and the whole reason of using React.
                        <br />
                        After that one I went for another, I built <Link to="/projects/3" className='link'>Recipe-Directory</Link>. This one was the one, and by the one I mean more close to a real project. But still there are a lot of things in this project that are different from a real project out there still in that time was a huge seccuss for me.
                        <br />
                        Then I built the next one I realized that the last one wan nothing but shit.
                        <br />
                        I built <a to="/projects/2" className='link'>Finance-Tracker</a>. Till now, this project is the hardest and the most complex project I've ever built. I was my first time that I had to dealt with authentication. And it was the harderst part.
                        <br />
                        Honestly till today I don't even know how I built that project, I mean literally if someone wanted me to open the codes and explain them, I got nothing to say. And they'll have nothing either, only God knows how that project is working.
                        <br />
                        I mean I have more plans for that project, first of all i want to figure out what the hell did I write to make that work and then I want to add a lot of features to it.
                        <br />
                        So after that one I built <a to="/projects/1" className='link'>Disney-Plus-Clone</a>. This project was really easy and it was really good because after these project I feel like I'm the god of athentication (I'll bet I will laugh at this sentence in future).
                        <br />
                        So that's it till now. After those projects I built my portfolio which you're in it already (I'll bet no one's here).
                    </Text>
                </Content>
            </AboutMePage>
        </>
    );
};

const AboutMePage = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        filter: blur(10px);
        position: absolute;
        inset: 0 0 0 0;
        z-index: -9;
    }
`;

const Content = styled(motion.div)`
    width: 80%;
    height: 60%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
    }
`;

const Title = styled(motion.h1)`
    font-family: 'Outfit', sans-serif;
    font-weight: 900;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: -5px;
    word-spacing: 10px;
    white-space: nowrap;
    width: 40%;
    text-align: center;

    @media (max-width: 1300px) {
        width: 100%;
        height: 40%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 20%;
    }
`;

const Text = styled(motion.p)`
    font-family: 'Outfit', sans-serif;
    font-weight: 200;
    font-size: .9rem;
    word-spacing: 1px;
    letter-spacing: -.3px;
    line-height: 1.7;
    width: 60%;
    height: 70%;
    padding: 0 1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 3rem;

    @media (max-width: 1300px) {
        width: 90%;
        height: 60%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 80%;
        padding: 0 1rem;
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

    .link {
        font-weight: 500;
        white-space: nowrap;
    }
`;

export default AboutMe;