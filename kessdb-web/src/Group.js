import './App.css';
import { ReactComponent as Close } from './svg/Group 2.svg';



export default function Group() {
      
  return (
    <>
      <div className = 'group-page'>
        <Close className='close'/>
        <div className='home'>Home</div>
        <div className='service'>Service</div>
        <div className='tutorial'>Tutorial</div>
        <div className='qa'>Q&A</div>
      </div>
    </>
  );
}