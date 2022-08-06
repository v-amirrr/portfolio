import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import styled from 'styled-components';

import { projects } from './Projects';

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const ProjectPage = () => {

    const { id } = useParams();
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
                    <p>{data.name}</p>
                </Page>
            }
        </>
    );
};

const Page = styled(motion.div)``;

export default ProjectPage;