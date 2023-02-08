import './Tutorial.css';
import './Main.css';
import React from 'react';
import { ReactComponent as Back } from './svg/back.svg';
import img from './svg/f.png'

import { useNavigate } from "react-router-dom";
 
function Tutorial() {

    const Navigate = useNavigate();
    const scrolltotop = () =>{
        window.scrollTo(0, 0);
    }
    scrolltotop();
    return (
        <>  
            <div>
                <div className = 'group-page'>
                    <div onClick={()=>{Navigate("/")}} className='back'>
                        <Back></Back>
                    </div>
                    <div className='kess'>Kess</div>
                    <div className='book'>Book</div>
                    <div className='border1'>들어가기에 앞서</div>
                    <div className='f1_1'>프로그래밍이란?</div>
                    <div className='f1_2'>데이터베이스에 대한 이야기</div>
                    <div className='border2'>데이터베이스에 대하여</div>
                    <div className='f2_1'>데이터와 'DBMS'</div>
                    <div className='f2_2'>데이터 모델</div>
                    <div className='border3'>KessDB 사용해보기</div>
                    <div className='f3_1'>표에 대하여</div>
                    <div className='f3_2'>'create'에 대하여</div>
                    <div className='f3_3'>'select'에 대하여</div>
                    <div className='f3_4'>'insert'에 대하여</div>
                    <div className='f3_5'>'delete'에 대하여</div>
                </div>
                <div className='top_tittle'>
                    들어가기 앞서
                </div>
                <div className='program_text'>
                    <b>프로그래밍이란?</b>
                </div>
                <div className='program_text2'>
                    <b>데이터베이스에 대한 이야기</b><br/>
                </div>
                <div className='second_tittle'>
                    데이터베이스에 대하여
                </div>
                <div className='program_text3'>
                    데이터와 'DBMS'
                </div>
                <div className='program_text4'>
                    데이터 모델
                </div>
                <div className='program_text5'>
                    표에 대하여
                </div>
                <div className='last_tittle'>
                    KessDB 사용해보기
                </div>
                <div className='program_text6'>
                    ‘create’에 대하여
                </div>
                <div className='program_1'>
                    우리는 요즘 여러 컴퓨팅 시스템에 설치된 다양한 프로그램(program)을<br/>이용하여 실생활의 다양한 문제들을 해결해 나가고 있습니다.<br/><br/>

                    예를 들어, 스마트폰에서 웹 브라우저 프로그램을 실행해서 날씨를<br/>확인한다거나 더 나아가 자동차에 설치된 자동 주차 프로그램을 이용하여<br/>주차까지도 자동으로 해결할 수 있게 되었습니다.<br/><br/>

                    프로그래밍(programming)이란 이와 같이 특정 목적을 달성하기 위해<br/>설계된 알고리즘(algorithm)을 프로그래밍 언어를 사용하여<br/>구체적인 프로그램으로 작성하는 과정을 가리킵니다.<br/><br/>간단히 프로그래밍이란 프로그램을 만드는 모든 작업이라고 볼 수 있는 것입니다.
                </div>
                
                <div className='program_2'>
                    우리가 왜 DB를 사용할까요? <br/><br/>
                    단지 데이터를 저장하기 위해서 사용할까요?<br/><br/>
                    옛날 사람들은 데이터를 직접 가공하고 디렉토리<br/> 
                    구조를 이용해 데이터를 정리하곤 했습니다.<br/><br/>
                    하지만 시간이 지남에 따라 데이터 양이 방대해지고<br/>
                    점점 디렉토리 구조로 데이터를 용이하게 사용할 수 없었죠<br/><br/>
                    이러한 문제를 해결하기 위해 데이터를 쉽게 관리할 수 있는<br/>
                    DB의 개념이  1950년대에 미국에서 탄생되었습니다.<br/><br/>
                    이 처럼 데이터베이스는 방대한 데이터 양을 데이터 쉽게 관리하기<br/>
                    위해서 탄생되었고 사용하는 이유입니다. 
                </div>
                <div className='program_3'>
                    데이터란?<br/><br/>

                    실체를 나타내는 값들의 집합 <br/>

                    아무런 가공 과정 없이 수집된 값 또는 자료 자체를 데이터라 부름<br/><br/><br/><br/>

                    DBMS란?<br/><br/>

                    DataBase Management System의 준말로<br/><br/>

                    컴퓨터에 저장된 데이터베이스를 관리해주는 소프트웨어를 칭함<br/><br/>

                    데이터를 파일 단위로 직접 관리하면 수십여 건 정도는 무리없이 사용할 수 있지만<br/><br/>

                    데이터 수가 증가하여 관리해야 할 파일 또한 늘어나게 된다면 한계에 부딪힌다는 것은<br/><br/>

                    어쩜 당연한 일 입니다. 때문에 DBMS를 활용하여 데이터를 데이터베이스로 정리하여<br/><br/>

                    좀 더 효율적으로 데이터를 통제하고 관리하게 되었습니다.<br/>
                </div>
                <div className='program_4'>
                    ex'{')'}' ‘고양이’의 외향적 특징으로 데이터베이스를 구상하고자 합니다<br/>

                    ‘고양이’ 라는 개체의 데이터를 데이터베이스에 넣는다고 가정하면 다음과 같은 순서로 DB를<br/><br/>

                    구상할 수 있습니다<br/><br/>

                    1. ‘고양이’의 무엇을 데이터로 취급할 것인지 결정합니다. 여기서는  ‘고양이’의 외향적 특징으로 데이터베이스를 구성하고자 합니다.<br/><br/>
                    2. ‘고양이’의 외향적 특징을 데이터로 선별합니다<br/><br/>
                        
                        예를 들어 “귀는 세모로 뾰족하고 2개를 가지고 있다.” 와 같은 데이터 입니다<br/><br/>
                        
                    3. 데이터베이스에 적절한 구조를 사용하여 ‘고양이’의 부위별 특징을 저장합니다.<br/><br/>

                    위와 같이 **현실 세계의 데이터를 변환하여 컴퓨터 데이터베이스에 저장하는 과정을   <br/>  <br/>                         데이터 모델링** 이라고 하며, **특정 데이터를 선별 및 정리하는 과정을 추상화** 라고 합니다.  <br/><br/>

                    또한, **데이터 모델링을 통해 데이터 사이의 관계와 그 흐름에 필요한 처리 과정과 제약 조건 등을 <br/>      추상화하여 개념적인 모형을 데이터 모델**이라고 합니다.<br/><br/>
                </div>
                <div className='program_5'>
                저희가 DB를 사용하는 이유는 데이터베이스는 방대한 데이터 양을 데이터 쉽게 관리하기 위해서 였습니다.<br/><br/> 
                그러면 DB는 어떻게 데이터를 관리할까요? 바로 표로 관리합니다. 컴퓨터는 파일로 프로그램들을 관리하듯이 말이죠,<br/>
                이처럼 데이터 베이스는 표로 관리하며 최소 단위가 됩니다.<br/><br/> 그러면 표가 무엇일까요?
                표는 마치 엑셀과 같습니다.<br/><br/>
                아래의 사진처럼 표는 행과 열이 존재하는 것을 알 수 있습니다. <br/>
                </div>
                <img src={img} className='first_img' alt='표에 대하여'></img>
                <div className='program_6'>
                    저희는 이제까지 표, 데이터타입에 대해 알아보았습니다. 이제는 KessDB의 ‘create’ 명령어를 이용해 데이터 베이스에 표를 생성해 봅시다. <br/><br/>

                    먼저 만들다 명령어는 아래의 형식을 이용해 표를 생성합니다.<br/>

                    ```jsx
                    create {'{'}'"표이름"{'}'} {'{'}"열이름1", "열이름2" {'}'}<br/><br/>
                    ```

                    먼저 create 입력해준 뒤, 중괄호를 사용해 표이름을 적어주고, 또 중괄호를 이용해 열이름과 자료형을 적어줍니다.<br/>

                    이렇게 작성하면 데이터 베이스에 표가 생성됩니다. 아래와 같이 표가 생성됩니다.<br/>
                     ------------------------------<br/>
                    |     행 \ 열 |     열이름 |      열이름 |<br/>
                    ------------------------------
                </div>
            </div>
           
        </>
    );
}

export default Tutorial;