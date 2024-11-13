import React, { useState, useContext} from 'react'
import './Sidebar.css'
import { assets } from '../assets/assets';
import { Context } from '../content/Content';
const Sidebar = () => {

    const [extend, setExtend] = useState(false);
    const{onSent,prev,setRecent,newChat} = useContext(Context);


    return (

        <div className='sidebar'>
            <div className='top'>
                <img  className="menu" src={assets.menu_icon} alt="menu" onClick={()=>setExtend(prev=>!prev)}></img>
                <div className='new-chat' onClick={()=>newChat()}>
                    <img src={assets.plus_icon} alt="" />
                    {extend ? <p>New chat</p> : null}
                </div>

                {extend ? <div className='Recent'>
                    <p className='recent-title'>Recent</p>
                    {prev.map((item,index)=>{
                        return(
                            <div className='recent-entry'>
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)}</p>
                        </div> 
                        );
                    })}
                   
                </div> : null}

            </div>
            <div className="bottom">
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}></img>
                   {extend ?<p>Help</p>:null } 
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon}></img>
                    {extend ?<p>Activity</p>:null } 
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon}></img>
                    {extend ?<p>Settings</p>:null } 
                </div>
            </div>

        </div>
    )
}

export default Sidebar
