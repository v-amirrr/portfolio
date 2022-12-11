import React from 'react';

import GmailIcon from "../assets/images/gmail.svg";
import TelegramIcon from "../assets/images/telegram.svg";
import SkypeIcon from "../assets/images/skype.svg";
import LinkdInIcon from "../assets/images/linkedin.svg";
import GitHubIcon from "../assets/images/github.svg";

import { AiOutlineCopy } from 'react-icons/ai';
import { TbCornerDownRight } from 'react-icons/tb';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const contact = [
    { name: "email", link: "mailto:amirrr.valizadeh@gmail.com", username: "amirrr.valizadeh@gmail.com", img: GmailIcon },
    { name: "telegram", link: "https://t.me/v_amirrr", username: "v_amirrr", img: TelegramIcon },
    { name: "skype", link: "https://join.skype.com/invite/MNV0cL3D8Jwf", username: "live:.cid.98798c4805efe65a", img: SkypeIcon },
    { name: "linkedin", link: "https://linkedin.com/in/amirvalizadeh", username: "Amir Valizadeh", img: LinkdInIcon },
    { name: "github", link: "https://github.com/v-amirrr", username: "v_amirrr", img: GitHubIcon },
    // { name: "instagram", link: "https://www.instagram.com/v_amirrr", username: "v_amirrr", img: "/images/instagram.svg" },
    // { name: "twitter", link: "https://twitter.com/v_amirrr", username: "v_amirrr", img: "/images/twitter.svg" },
    // { name: "whatsapp", link: "https://wa.me/9330938960", username: "amir", img: "/images/whatsapp.svg" },
];

const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.1, when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.2, staggerChildren: 0.1, when: "afterChidren" } }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.5 },
    visible: { opacity: 1, y: [-20, 20, 0], scale: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, y: [0, -20, 20], scale: 0.5, transition: { duration: 0.4, type: 'tween' } }
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
    margin-top: 3rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00000033;
        border-radius: 10px;
        width: 23rem;
        height: 4rem;
        margin: 1rem 0;

        img {
            width: 4rem;
        }

        span {
            margin: 0 .5rem;
            font-family: 'Outfit', sans-serif;
            font-weight: 200;
            font-size: 1.1rem;
            text-transform: capitalize;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666;
            transition: color .4s;
            cursor: pointer;
            white-space: nowrap;

            i {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #88888888;
                font-size: 1rem;
                transition: color .4s;
            }

            &:hover {
                color: #fff;

                i {
                    color: #fff;
                }
            }
        }
    }

    @media (max-width: 768px) {
        div {
            width: 20rem;
            height: 4rem;

            img {
                width: 3.5rem;
            }

            span {
                font-size: 1rem;
            }
        }
    }
`;

export default Contact;