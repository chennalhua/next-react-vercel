import React, { useState } from 'react';
import Head from 'next/head'
const About = () => {
    return (
        <>
            <Head>
                <title>About|關於我們</title>
                <meta property="og:image" content="https://i.imgur.com/c3gZ0B8.jpeg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
            </Head>
            <p>hello about</p>
        </>
    )
}
export default About