import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { GetFormData } from '../../src/function/FormDataEvent';
const CheckPage = () => {
    const router = useRouter()
    let [data, setData] = useState(null)
    useEffect(() => {
        setData(GetFormData(router.query.order))
        console.log(GetFormData(router.query.order))
    }, [router.query]);

    useEffect(() => { console.log(data) }, [data])
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <h2>確認頁面</h2>
                        <hr />
                        <ul>
                            {
                                (data !== null && data !== undefined) &&
                                <>
                                    <li>姓名：{data.CusName}</li>
                                </>
                            }
                        </ul>
                        <button className='btn btn-primary' onClick={e => router.back()}>上一頁(back)</button>
                        <button className='btn btn-primary' onClick={e => router.push({ pathname: '/form', query: { order: router.query.order } })}>上一頁</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckPage