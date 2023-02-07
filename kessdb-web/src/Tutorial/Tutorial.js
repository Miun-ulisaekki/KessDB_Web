import '../Main.css';
import './Tutorial.css';
import React from 'react';
import './Tutorial.css';
import { ReactComponent as Back } from '../svg/back.svg';


import { NavLink, useNavigate } from "react-router-dom";
 
function Tutorial() {

    const Navigate = useNavigate();
    const scrolltotop = () =>{
        window.scrollTo(0, 0);
    }
    scrolltotop();
    return (
        <>
            <div className = 'group-page'>
                <div onClick={Navigate("/")} className = 'back'></div>
                <Back className='back'>back</Back>
                <div className='kess'>Kess</div>
                <div className='book'>Book</div>
                <div className='border1'>들어가기에 앞서</div>
                <div className='f1_1'>프로그래밍이란?</div>
                <div className='f1_2'>데이터베이스에 대한 이야기</div>
                <div className='border2'>데이터베이스에 대하여</div>
                <div className='f2_1'>데이터와 데이터모델</div>
                <div className='f2_2'>데이터 모델</div>
                <div className='border3'>KessDB 사용해보기</div>
                <div className='f3_1'>표에 대해 알아보자</div>
                <div className='f3_2'>표를 생성해보자</div>
                <div className='f3_3'>데이터를 대입해보자</div>
                <div className='f3_4'>데이터를 조회해보자</div>
                <div className='f3_5'>데이터를 변경해보자</div>
                <div className='f3_6'>데이터를 삭제해보자</div>
            </div>
            <div className='top_tittle'>~~~~~~~</div>

        
        </>
    );
}

export default Tutorial;