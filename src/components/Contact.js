import React from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import { AiOutlineCopy } from 'react-icons/ai';
import { TbCornerDownRight } from 'react-icons/tb';

const contact = [
    { name: "email", link: "mailto:amirrr.valizadeh@gmail.com", username: "amirrr.valizadeh@gmail.com", img: "/images/gmail.svg" },
    { name: "linkedin", link: "https://linkedin.com/in/amirvalizadeh", username: "Amir Valizadeh", img: "/images/linkedin.svg" },
    { name: "github", link: "https://github.com/v-amirrr", username: "v_amirrr", img: "/images/github.svg" },
    { name: "telegram", link: "https://t.me/v_amirrr", username: "v_amirrr", img: "/images/telegram.svg" },
    { name: "instagram", link: "https://www.instagram.com/v_amirrr", username: "v_amirrr", img: "/images/instagram.svg" },
    { name: "skype", link: "https://join.skype.com/invite/MNV0cL3D8Jwf", username: "live:.cid.98798c4805efe65a", img: "/images/skype.svg" },
    { name: "twitter", link: "https://twitter.com/v_amirrr", username: "v_amirrr", img: "/images/twitter.svg" },
    { name: "whatsapp", link: "https://wa.me/9330938960", username: "amir", img: "/images/whatsapp.svg" },
];

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween', when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween', when: "afterChildren" } }
};

const contentVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4, type: 'tween' } }
};

const Contact = () => {

    const copy = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            <ContactPage initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                <Content variants={contentVariants}>
                    {
                        contact.map(item => (
                            <motion.div variants={itemVariants}>
                                <img src={item.img} />

                                <a href={item.link} target="_blank">
                                    <motion.span whileTap={{ scale: 0.8 }}>
                                        <i><TbCornerDownRight /></i>
                                        <p>open</p>
                                    </motion.span>
                                </a>

                                <motion.span whileTap={{ scale: 0.8 }} onClick={() => copy(item.link)}>
                                    <i><AiOutlineCopy /></i>
                                    <p>link</p>
                                </motion.span>

                                <motion.span whileTap={{ scale: 0.8 }} onClick={() => copy(item.username)}>
                                    <i><AiOutlineCopy /></i>
                                    <p>username</p>
                                </motion.span>
                            </motion.div>
                        ))
                    }
                </Content>
            </ContactPage>
        </>
    );
};

const ContactPage = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    background-color: #000000aa;
`;

const Content = styled(motion.div)`
    padding: 0 2rem;
    height: 60%;
    margin-top: 3rem;
    overflow-x: hidden;
    overflow-y: scroll;

    @media (max-width: 600px) {
        padding: 0 1rem;
        overflow: hidden;
        height: auto;
    }

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

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: #00000033;
        border-radius: 10px;
        width: 23rem;
        height: 4rem;
        margin: 1rem 0;
        border: solid 1px #ffffff11;
        transition: background .4s;

        @media (max-width: 700px) {
            width: 18rem;
            height: 3.5rem;
            background-color: #ffffff05;
        }

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                background-color: #ffffff05;
            }
        }

        img {
            width: 4rem;

            @media (max-width: 700px) {
                width: 3rem;
            }
        }

        span {
            margin: 0 .5rem;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            color: #c1c1c1;
            letter-spacing: -1px;
            transition: color .4s;
            cursor: pointer;
            white-space: nowrap;

            @media (max-width: 700px) {
                font-size: .8rem;
            }

            &:hover {
                color: #fff;
            }

            i {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                font-size: 1.2rem;

                @media (max-width: 700px) {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export default Contact;