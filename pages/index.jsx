import React, { useState, useEffect } from 'react';
import Head from 'next/head'
const HomePage = () => {
    let [num, setNum] = useState(0)

    useEffect(() => {
    }, []);
    return (
        <>
            <Head>
                <title>HomePage|首頁</title>
                <meta property="og:image" content="https://i.imgur.com/yz6yEhH.jpeg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
            </Head>
            {num}
            <button onClick={e => setNum(num + 1)}>click</button>
        </>
    )
}
export default HomePage