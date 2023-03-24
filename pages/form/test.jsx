import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { EncryptFormData, GetFormData } from '../../src/function/FormDataEvent'

function App() {
    const router = useRouter()
    let form = useRef({});
    useEffect(() => {
        if (GetFormData(router.query.order) !== undefined) {
        }
    }, [router.query]);

    const formik = useFormik({
        initialValues: {
            CusName: '',
            Mobile: ''
        },
        validationSchema: Yup.object({
            CusName: Yup.string() // 将值（不为空时）转化为字符串
                .max(15, '用户名长度不得超过15个字') // 验证长度
                .required('请输入用户名'), // 验证必传
            Mobile: Yup.string()
                .min(6, '密码长度不得小于6')
                .required('请输入密码')
        }),
        onSubmit: values => {
            console.log(values)
            router.push({ pathname: '/form/checkPage', query: { order: EncryptFormData(values) } })
        }
    })

    return (
        <div className="container mt-2">
            <form onSubmit={formik.handleSubmit} ref={form}>
                <div className='mb-2'>
                    <input
                        type="text"
                        name="CusName"
                        className={`form-control ${formik.errors.CusName ? 'is-invalid' : ''}`}
                        value={formik.values.CusName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {(formik.touched.CusName && formik.errors.CusName) && <div className='text-danger'>{formik.errors.CusName}</div>}
                <div className='mb-2'>
                    <input
                        type="text"
                        name="Mobile"
                        className={`form-control ${formik.errors.Mobile ? 'is-invalid' : ''}`}
                        value={formik.values.Mobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {(formik.touched.Mobile && formik.errors.Mobile) && <div className='text-danger'>{formik.errors.Mobile}</div>}
                <div className='d-flex justify-content-center mt-5'>
                    <button type='submit' className='btn btn-primary text-light mx-2 fw-bolder'>下一步</button>
                </div>
            </form>
        </div>
    )
}

export default App

