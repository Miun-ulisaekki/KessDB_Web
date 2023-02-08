import './Main.css';
import { ReactComponent as Close } from './svg/Group 2.svg';
import { useNavigate } from "react-router-dom";



export default function Group() {
  const Navigate = useNavigate();
  
  return (
    <>
      <div className = 'group-page'>
        <Close className='close'/>
        <div className='home'>Home</div>
        <div className='service'>Service</div>
        <div className='tutorial' onClick={()=>{
          Navigate("/tutorial");
        }}>Tutorial</div>
        <div className='qa'>Q&A</div>
      </div>
    </>
  );
}