import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { EncryptFormData, GetFormData } from '../../src/function/FormDataEvent';

//@ 表單驗證
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const Form = () => {
    const router = useRouter()
    let [data, setData] = useState(null)

    useEffect(() => {
        if (GetFormData(router.query.order) !== undefined) {
            setData(GetFormData(router.query.order))
        }
    }, [router.query]);

    //* 表單驗證
    const validationSchema = Yup.object().shape({
        CusName: Yup.string().required('必填'),
        IDNo: Yup.string().required('必填'),
        Mobile: Yup.string().required('必填'),
        City: Yup.string().required('必填'),
        Sex: Yup.string().required('必填')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const Submit = (data) => {
        console.log(data)
        router.push({ pathname: '/form/checkPage', query: { order: EncryptFormData(data) } })
    }
    return (
        <>
            < div className='container py-4' >
                <div className="col-6">
                    <form onSubmit={handleSubmit(Submit)}>
                        <div className="mb-3">
                            <label for="exampleInputName1" className="form-label">姓名</label>
                            <input type="text" id="exampleInputName1" aria-describedby="nameHelp"
                                className={`form-control ${errors.CusName ? 'is-invalid' : ''}`}
                                {...register('CusName')} />
                            <div className='invalid-feedback'>{errors.CusName?.message}</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputMobile1" className="form-label">行動電話</label>
                            <input type="text" id="exampleInputMobile1"
                                className={`form-control ${errors.Mobile ? 'is-invalid' : ''}`}
                                {...register('Mobile')} />
                            <div className='invalid-feedback'>{errors.Mobile?.message}</div>
                        </div>
                        <div className="mb-3">
                            <select aria-label="Default select example" id='citySelect' className={`form-select ${errors.City ? 'is-invalid' : ''}`}
                                {...register('City')} >
                                <option selected disabled>-- 請選擇城市</option>
                                <option value="1">台北市</option>
                                <option value="2">台中市</option>
                                <option value="3">高雄市</option>
                            </select>
                            <div className='invalid-feedback'>{errors.City?.message}</div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex'>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='M' {...register('Sex')} />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        男
                                    </label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='F' {...register('Sex')} />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        女
                                    </label>
                                </div>
                            </div>
                            <div className='invalid-feedback d-block'>{errors.Sex && '必填'}</div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <input type='text' id='IDNo' className={`form-control ${errors.IDNo ? 'is-invalid' : ''}`} placeholder='晶片號碼 10 ~ 15 碼'
                            {...register('IDNo')} />
                        <div className='invalid-feedback'>{errors.IDNo?.message}</div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button type='submit' className='btn btn-primary text-light mx-2 fw-bolder'>下一步</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
export default Form