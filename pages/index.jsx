import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import axios from 'axios';
const HomePage = () => {
    let [num, setNum] = useState(0),
        [areaList, setAreaList] = useState([])

    useEffect(() => {
        let API = `${process.env.REACT_APP_API}/GetCouArea`
        axios.get(API)
            .then((res) => {
                setAreaList(res.data.cou_Areas)
            })
    }, []);

    useEffect(() => { }, [areaList])
    return (
        <>
            <Head>
                <title>HomePage|首頁</title>
                <meta property="og:image" content="https://i.imgur.com/yz6yEhH.jpeg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="350" />
            </Head>
            <div className='container mt-3'>
                <span className='pe-2'>{num}</span>
                <button className='btn btn-primary' onClick={e => setNum(num + 1)}>click</button>
                <p className='mt-2'>目前環境：{process.env.REACT_APP_API}</p>

                <div className='mt-2'>
                    <p>Test Get API：</p>
                    <ul>
                        {areaList.map((item, index) => {
                            return (
                                <li>{item.COU_NAME}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default HomePage