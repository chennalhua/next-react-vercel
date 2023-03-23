import React, { useState } from 'react';
const Blog = () => {
    let arr = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className="container mt-3">
                <h3>部落格</h3>
                <ul>
                    {
                        arr.map((item, index) => {
                            return (
                                <li><a href={`/blog/pet/${item}`}>{item}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default Blog