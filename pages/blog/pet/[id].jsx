import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Head from 'next/head'
const PetBlogInside = () => {
    const router = useRouter()

    let [num, setNum] = useState(router.query.id)
    useEffect(() => { setNum(router.query.id) }, [router.query]);

    return (
        <>
            <Head>
                <title>部落格|{router.query.id}</title>
                <meta property="og:image" content={`../../../src/images/blog/NO.${num}_S.jpg`} />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
            </Head>
            <div className="container mt-3">
                {
                    num !== undefined &&
                    <Image
                        src={require(`../../../src/images/blog/NO.${num}_S.jpg`)}
                        alt="Picture of the author"
                        className='img-fluid'
                        width={500}
                        height={500}
                    />
                }
                <p>內頁：{router.query.id}</p>
                <p>../../../src/images/blog/NO.{router.query.id}_S.jpg</p>
            </div>
        </>
    )
}
export default PetBlogInside