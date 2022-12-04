import React from 'react';

import { Link } from "react-router-dom";

import styled from 'styled-components';
import { motion } from 'framer-motion';

const titleDesktopVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: [1.1, 1], transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, x: -50, scale: 0.8, transition: { duration: 0.4, type: 'tween' } }
};

const textDesktopVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: [1.1, 1], transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, x: 50, scale: 0.8, transition: { duration: 0.4, type: 'tween' } }
};

const titleMobileVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: [1.1, 1], transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.4, type: 'tween' } }
};

const textMobileVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: [1.1, 1], transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: -50, scale: 0.8, transition: { duration: 0.4, type: 'tween' } }
};

const AboutMe = ({ widthSize }) => {
    return (
        <>
            <AboutMePage initial='hidden' animate='visible' exit='exit'>
                <Content>
                    <Title variants={widthSize >= 900 ? titleDesktopVariants : titleMobileVariants}>who am i?</Title>
                    <Text variants={widthSize >= 900 ? textDesktopVariants : textMobileVariants}>
                        <p>
                            I'm a junior Front-End Developer. I was borned and raised in Mashhad which is a !beautiful city in Iran.
                            <br />
                            <br />
                            I started learning web development in 2020, and it was one of my best decisions throughout life.
                            <br />
                            <br />
                            First I learned HTML and CSS. Then I tried Bootstrap but I decided that pure CSS gives me more freedom so I decided to only use pure CSS and nothing else.
                            <br />
                            <br />
                            At that point I remember I built some projects with HTML and CSS but since I didn't know any Git, I have no idea where those projects are.
                            <br />
                            <br />
                            Those projects were the first time that I had to deal with responsiveness, and it was !great.
                            <br />
                            <br />
                            After that I learned JavaScript (still learning, ain't no end learning that shit). Then I tried some libraries for animating stuff such as Animate.CSS, Typed.js, Particles.js and ScrollReveal.js.
                            <br />
                            <br />
                            Also I tried jQuery to know what it is and after realizing what it is I haven't worked with it since.
                            <br />
                            <br />
                            Then I learned Git and it was project time so I built my first professional project called <Link to="/projects/7" className='link'>CLock</Link>. This project is built only with HTML, CSS and JavaScript.
                            <br />
                            <br />
                            After my first project, it was time to start the real shit. So I started learning React.js. Why did I choose React? Good questions.
                            <br />
                            <br />
                            So after trying a lot of courses I gained some knowledge about React.js. I decided to build a little project with it, just for fun. So I built <Link to="/projects/6" className='link'>Random-Password-Generator</Link>.
                            This project was supposed to be a project where I practice my React skills but it really was more JavaScript than React in it. I built it anyway.
                            <br />
                            <br />
                            Then I realized that I wanted a real thing, a unique project. So I built <Link to="/projects/5" className='link'>Memory-Game</Link>. That project really helped me with my React skills. It was in that project that I really understood the use of reusable components and the whole reason for using React.
                            <br />
                            <br />
                            After that one I went for another, I built <Link to="/projects/4" className='link'>Recipe-Directory</Link>. This one was the one, and by the one I mean more close to a real project. But still there are a lot of things in this project that are different from a real project out there but still in that time it was a huge success for me.
                            <br />
                            <br />
                            Then I built the next one and I realized that the last one was nothing.
                            <br />
                            <br />
                            I built <Link to="/projects/3" className='link'>Finance-Tracker</Link>. Till now, this project is the hardest and the most complex project I've ever built. It was my first time that I had to deal with authentication. And it was the hardest part.
                            <br />
                            <br />
                            Honestly till today I don't even know how I built that project, I mean literally if someone wanted me to open the codes and explain them, I got nothing to say. And they'll have nothing either, only God knows how that project is working.
                            <br />
                            <br />
                            I have more plans for that project. First of all, I want to figure out what the hell I wrote to make that work, then I want to add a lot of features to it.
                            <br />
                            <br />
                            So after that one I built <Link to="/projects/2" className='link'>Disney-Plus-Clone</Link>. This project was really easy and it was really good because after this project I feel like I'm the god of authentication (I'll bet I will laugh at this sentence in future).
                            <br />
                            <br />
                            Next I built my portfolio which you're in already (I'll bet no one's here).
                            <br />
                            <br />
                            And after that I tried to build something with API but since I live in Iran (!beautiful country), a lot of services for developer are not available. I tried build a trevel advisor and I wanted to use google map API with they wanted my number and guess what Iranian number wans't acceptable.
                            After that I wanted to build a lyrics search and that API also wanted a phone number and you know the rest.
                            <br />
                            <br />
                            So I went for another Firebase project. I built <Link to="/projects/1" className='link'>Group-Messenger</Link>. I just wanted this project to be simple as possible. You can send your messages with just entering your name. It was a good project. It really made me happy. It's so clean and beautiful.
                            <br />
                            <br />
                            So here I am. Right now I'm looking for a position to use my skills and gain some experience. To reach me just go to the <Link to="/contact" className='link'>contact</Link> page.
                        </p>
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
    overflow: hidden;
`;

const Content = styled(motion.div)`
    width: 80%;
    height: 80%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-top: 3rem;
    z-index: 5;

    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        width: 100%;
        height: 100%;
        margin: 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 1300px) {
        width: 100%;
        height: 30%;
    }

    @media (max-width: 500px) {
        height: 20%;
        font-size: 2.5rem;
    }
`;

const Text = styled(motion.p)`
    width: 50%;
    height: 65%;
    background-color: #ffffff05;
    border: solid 1px #ffffff08;
    border-radius: 10px;
    overflow: hidden;

    p {
        font-family: 'Outfit', sans-serif;
        font-weight: 200;
        font-size: 1rem;
        word-spacing: 2px;
        line-height: 1.5;
        overflow: hidden scroll;
        width: 100%;
        height: 100%;
        padding: 1.5rem 2rem;
        color: #888;
        user-select: text;
        box-shadow: #00000033 0px 5px 10px;

        /* width */
        ::-webkit-scrollbar {
            width: .2rem;
            position: absolute;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 50px;
            background: #ffffff08;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #ffffff33;
            border-radius: 50px;
        }
    }

    @media (max-width: 1300px) {
        width: 60%;
        height: 50%;
    }
    
    @media (max-width: 900px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        p {
            padding: 1rem 1.2rem;
            font-size: .9rem;
        }
    }

    @media (max-width: 400px) {
        width: 90%;
    }

    .link {
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
    }
`;

export default AboutMe;