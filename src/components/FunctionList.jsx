import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
//@ components
import Icon from './Icon';
import switchEvent from '../assets/function/switchEvent';
const FunctionList = ({ type, GotoInsurance }) => { //固定右側功能列
    const location = useRouter()

    //@ VALUE
    let [isShowList, setIsShowList] = useState(false) // true: 開啟 , false: 隱藏

    //@ EVENT
    const handleEvent = {
        clickGoTop: function (e) { //go top
            e.preventDefault();
            window.scrollTo(0, 0)
        },
        openListState: function (e) {
            e.preventDefault()
            setIsShowList(switchEvent(isShowList))
        }
    }

    useEffect(() => {
        let fbMessenger = document.querySelector('#fb-root')
        if (fbMessenger !== null) {
            if (isShowList) {
                fbMessenger.style.display = 'block'
            } else {
                fbMessenger.style.display = 'none'
            }
        }
    }, [isShowList])

    //@ BUTTON
    const handleBtn = {
        goHealthy: function () { //@ GO 健康
            return (
                location.pathname == '/events/goHealthy' ? '' :
                    <div className='position-relative animation-wiggle' style={{ bottom: '89px' }}>
                        <button className='event-btn btn my-4' style={{ background: '#B5E4B1' }} onClick={e => location.push({ pathname: '/events/goHealthy' })}>
                            <Image src={require('../../public/image/event/goHealthy/06b.jpg')} className='img-fluid' />
                        </button>
                        <a href='/events/goHealthy' className='bg-secondary text-light rounded-pill position-absolute w-100 text-center small' style={{ fontSize: '13px', padding: '4px', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>立即加入</a>
                    </div>
            )
        },
        goInsurance: function () { //@ 立即投保 -- 運用在懶人包，導致對應險種商品頁
            return (
                <button onClick={e => window.location.href = `/${type}/case`}
                    className='goto-insurance function-btn btn my-3 position-relative bg-secondary-l animation-wiggle'>
                    <p className='text-center' style={{ fontSize: '15px' }}>立即<br />投保</p>
                </button>
            )
        },
        goLine: function () { //@ 加入 LINE 好友
            return (
                <a href='https://liff.line.me/1645278921-kWRPP32q/?accountId=gogobo' target='_blank' className='function-btn btn my-3 position-relative bg-primary-s' id='LineContact'>
                    <Image src={require('../../public/image/basic/line@.png')} width={40} className='position-absolute' style={{ right: '9px' }} />
                    <p className='bg-dark text-light rounded-pill position-absolute w-100 text-center' style={{ fontSize: '13px', padding: '4px', bottom: '-10px', left: '50%', transform: 'translateX(-50%)' }}>LINE@</p>
                </a>
            )
        },
        haveQA: function () { //@ 有疑問
            return (
                <button className='function-btn btn my-3 position-relative' style={{ background: '#B5E4B1' }} onClick={e => location.push({ pathname: '/consultCenter' })}>
                    <Image src={require('../../public/image/basic/gogobo_egg.png')} className='img-fluid' />
                    <p className='bg-dark text-light rounded-pill position-absolute w-100 text-center' style={{ fontSize: '13px', padding: '4px', bottom: '-10px', left: '50%', transform: 'translateX(-50%)' }}>有疑問?</p>
                </button>
            )
        },
        goTop: function () { //@ go top
            return (
                <button className='gotop btn w-100 rounded-pill p-1 mt-2' style={{ boxShadow: '0 0 10px 0 rgba(0,0,0,.2)' }}
                    onClick={handleEvent.clickGoTop}>
                    <p className='small text-center'>
                        <Icon color='#5faa58' size={14} icon='arrow_up_full' />
                        TOP
                    </p>
                </button>
            )
        }
    }

    //@ STYLE
    const handleStyle = {
        openList: { //@ 展開
            background: 'rgba(95,170,88, .5)',
            width: '65px',
            position: 'absolute',
            right: '-10px',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            top: '-63px',
            padding: '5px'
        }
    }

    useEffect(() => {
        let fbMessenger = document.querySelector('.fb_dialog_content')
        if (fbMessenger !== null) {
            if (isShowList) {
                fbMessenger.style.display = 'block'
            } else {
                fbMessenger.style.display = 'none'
            }
        }
    }, [isShowList])

    return (
        <>
            {/* <Icon icon='arrow_left_line' size={20} color='#fff'/>
        <Icon icon='arrow_right_line' size={20} color='#fff'/> */}
            <div className='function-list position-fixed d-block' style={{ bottom: '25px', right: '10px', zIndex: '10' }}>
                {GotoInsurance && handleBtn?.goInsurance()}
                <a href='#' className='open-btn' onClick={e => handleEvent?.openListState(e)}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Icon icon={`${isShowList ? 'arrow_right_line' : 'arrow_left_line'}`} size={20} color='#fff' className={`py-1`} />
                    </div>
                    <p style={{ whiteSpace: 'pre' }}>有疑問?</p>
                    <div className={`${isShowList ? 'd-block' : 'd-none'}`}>
                        <button id='FBContact' className='function-btn btn my-3 position-relative bg-fb' style={{ top: '6px', right: '1px', boxShadow: 'none' }}>
                            <div class="spinner-border spinner-border-sm text-light " role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </button>
                        {handleBtn?.goLine()}
                        {handleBtn?.haveQA()}
                    </div>
                </a>

                {handleBtn?.goTop()}
            </div>
        </>
    )
}
export default FunctionList