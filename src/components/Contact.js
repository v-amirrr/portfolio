import React from 'react';

import { AiOutlineCopy } from 'react-icons/ai';
import { TbCornerDownRight } from 'react-icons/tb';

import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.05, when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.2, staggerChildren: 0.05, when: "afterChidren" } }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, type: 'tween' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2, type: 'tween' } }
};

const Contact = () => {

    const copy = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            <ContactPage>
                <Content variants={contentVariants} initial='hidden' animate='visible' exit='exit'>
                    {
                        contact.map(item => (
                            <motion.div variants={itemVariants}>
                                <img src={item.img} alt="contact-icon" />

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
`;

const Content = styled(motion.div)`
    padding: 0 2rem;
    height: 70%;
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
            font-weight: 400;
            letter-spacing: -.5px;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            color: #666;
            transition: color .4s;
            cursor: pointer;
            white-space: nowrap;

            @media (max-width: 700px) {
                font-size: .8rem;
            }

            i {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                color: #888;
                transition: color .4s;

                @media (max-width: 700px) {
                    font-size: 1rem;
                }
            }

            &:hover {
                color: #fff;

                i {
                    color: #fff;
                }
            }
        }
    }
`;

export default Contact;