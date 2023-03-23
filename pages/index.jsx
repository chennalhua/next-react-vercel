import React, { useState, useEffect } from 'react';
const HomePage = () => {
    let [num, setNum] = useState(0)

    useEffect(() => {
    }, []);
    return (
        <>
            {num}
            <button onClick={e => setNum(num + 1)}>click</button>
        </>
    )
}
export default HomePage