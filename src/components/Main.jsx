import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import './Main.css'
import { Context } from '../content/Content';

const Main = () => {

    const { onSent, recent, result, loading, resultData, input, setInput } = useContext(Context);


    return (
        <div className='main'>
            <div className='nav'>
                <p>AI-Mate</p>
                <img src={assets.user_icon}></img>
            </div>

            <div className='main-container'>
                {!result ? <>
                    <div className='greet'>
                        <p><span>Hello,Buddy</span></p>
                        <p>Dont fear! AI-Mate is here!!</p>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <p>Suggest beautiful plsces to see on an upcoming road trip</p>
                            <img src={assets.compass_icon}></img>
                        </div>
                        <div className='card'>
                            <p>Suggest beautiful ideas to make revolution in society</p>
                            <img src={assets.bulb_icon}></img>
                        </div>
                        <div className='card'>
                            <p>Suggest trending notes and hastags to popular reach</p>
                            <img src={assets.message_icon}></img>
                        </div>
                        <div className='card'>
                            <p>Suggest the correct path to learn the DSA && problem solving</p>
                            <img src={assets.code_icon}></img>
                        </div>
                    </div>
                </> : <div className='result'>
                    <div className='result-title'>
                        <img src={assets.user_icon} alt="" />
                        <p>{recent}</p>
                    </div>
                    <div className='result-data'>
                        <img src={assets.ai_icon} alt="" />
                        {loading ? <div className='loader'>
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                        </div> :
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }

                    </div>
                </div>
                }

                <div className='main-bottom'>
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text" placeholder='Enter your query ?' />
                        <div className='image'>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                           {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> :null} 

                        </div>
                    </div>
                    <p className='bottom-info'>
                        Your doing great  !!  keep doing  !!  stay consistent for success  !!   Keep Learning
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;
