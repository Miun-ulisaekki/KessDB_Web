import './Main.css';
import { ReactComponent as Btn } from './svg/Group.svg';
import { ReactComponent as Scroll } from './svg/Group 4.svg';
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as Img } from './svg/img.svg';
import img from './svg/man.png'
import img2 from './svg/img2.png'
import Group from './Group';
import {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";


function Main() {
  const [mode, setMode] = useState(false);
  const Navigate = useNavigate();
  
  
  return (
    <>
      
      <Logo className = 'logo'/>
      <div className = 'background-logo'>KessDB</div>
      <div className = 'KessDB1'>KessDB</div>
      <div className = 'KessDB2'>KessDB</div>
      <div className = 'korea'>orea</div>
      <div className = 'speed'>peed</div>
      <div className = 'easy'>asy</div>
      <div className = 'socket'>ocket</div>
      <Btn className = 'group'>
      </Btn>
      <a onClick = {e => {setMode(!mode)}} className = 'group'>
      {mode == true ? <Group/> : null}
       </a>
       <Scroll className='scroll' />
      <div className = 'service_text'>Service</div>
      <div className='long_text'>개발을 모르는 일반인이라도 쉽게 접해볼 수 있다
많은 데이터를 간단한 명령어로 관리할 수 있습니다.
한글를 이용한 명령어이므로 초보자도 쉽게 이용할 수 있습니다.
만약 DB가 어렵고 시작하기 어려우면 당장 KessDB를 시작하세요.</div>
      <Img className='img'/>
      <Logo className='second_logo'/>
      <div className='second_KessDB'>KessDB</div>
      <div className='second_text'>카페에서나 바쁜 지하철에서나 간단하게 한글로 <br></br>지금 당장 DB를 설계해보세요 .</div>
      <div className='letssee'>알아보러가기</div>
      <button className='second_btn'>GO</button>
      <Scroll className='scroll2' />
      <div className = 'KessDB3'>KessDB</div>
      <img src={img} alt='peopleicon' className='peopleimg'></img>
      <div className = 'KessDB4'>KessDB</div>
      <div className='Tutorial_tap'>Tutorial</div>
      <div className='kessbook'>KessBook</div>
      <div className='tutorial_text'>
        규칙적인 형식으로 이루어져 있으므로
        학습하기에 매우 용이합니다.<br></br>
        한글로 된 명령어이기 때문에 쉽게 배울수 있습니다.
      </div>
      <div className='tutorial_start'>공부하러 가볼까요?</div>
      <button className='styleTuBtn' onClick={()=>{Navigate("/tutorial")}}>dd</button>
      {/* <button className='tutorial_btn' onClick={()=>{Navigate("/tutorial");}}>Go</button> */}
      <Scroll className='scroll3' />
      <img src={img2} alt='qanda' className='qanda'></img>
      <div className='qna'>Q&A</div>
      <div className='KessDB5'>KessDB</div>
      <div className='qna_text'>간편하게 물어보세요.</div>
      <div className='qna_text2'>열심히 공부해도 헷갈리기 마련입니다.
온라인 Q&A로 도움을 받아 보세요.</div>
      <button button className='qna_btn'>Go</button>

    </>
  );
}

export default Main;
//<Link to={"tutorial"}>Go</Link>
