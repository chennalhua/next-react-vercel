import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { NextSeo } from 'next-seo';

const PetBlogInside = () => {
    const router = useRouter()

    let [num, setNum] = useState(router.query.id)
    useEffect(() => { setNum(router.query.id) }, [router.query]);
    return (
        <>
            <NextSeo
                title={`部落格|第${router.query.id}篇`}
                openGraph={{}}
            />
            <div className="container mt-3">
                {
                    num !== undefined &&
                    <Image
                        src={require(`../../../src/images/blog/NO.10_S.jpg`)}
                        alt="Picture of the author"
                        className='img-fluid'
                        width={500}
                        height={500}
                    />
                }
                <p>內頁：{router.query.id}</p>
                <p>../../../src/images/blog/NO.{router.query.id}_S.jpg</p>
                <a href='http://localhost:3000/src/images/blog/NO.10_S.jpg'>click</a>
            </div>
        </>
    )
}
export default PetBlogInside