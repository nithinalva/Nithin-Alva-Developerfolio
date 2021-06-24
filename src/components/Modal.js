import React from 'react'
import CountUp from 'react-countup';
import Bounce from 'react-reveal/Bounce';

const MODAL_STYLES={

    position:"fixed",
    top:'20%',
    left:"10%",

    backgroundColor:'#FFF',
   
    zIndex:1000,
    width:"70%",
    height:"590px",
 
   

}

const MODAL_OVERLAY={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000,
   
}


export const Modal = ({Confirmed,Recovered,Deaths,today,Open,setopen}) => {
    if(!Open) return null
    return (
        <>
        <div style={MODAL_OVERLAY}>
        <Bounce top>
            <div className="modal-styles">
                <div className="modal-header">
                            <h2><i class="fas fa-exclamation-triangle"></i> COVID-19 ALERT</h2>
                            <button class="close" onClick={()=>setopen(false)}>X</button>
                </div>

                <div className="modal-body">
                    <div className="covid-message">
                        <h2>STAY HOME SAVE LIVES</h2>
                            <p>HELP STOP CORONA VIRUS</p>
                    </div>
                        <div className="covid-posters">

                            <div className="img-poster">
                                <img src="/images/mask.jpg"/>
                            </div>

                            <div className="img-poster">
                                <img src="/images/handwash.jpg"/>
                            </div>

                            <div className="img-poster">
                                <img src="/images/social.jpg"/>
                            </div>

                        </div> 
                        <div className="covid-measures">
                            <p><b>STAY</b> home as much as you can .<b>KEEP</b> a safe distance .<b>WASH</b> hands often .<b>COVER</b> your cough .<b>SICK?DONT PANIC</b> Call ahead</p>
                        </div>

                        <div className="covid-counts-container">


                                <div className="count-container">
                                    <h2>CONFIRMED CASES,IND</h2>
                                      {/* <p>{Confirmed}</p>  */}
                              <p><CountUp end={Confirmed} separator="," /></p>

                                </div>
                                <div className="count-container">
                                    <h2>RECOVERED CASES,IND</h2>
                                    {/* <p>{Recovered}</p> */}
                                    <p><CountUp end={Recovered} separator="," /></p>
                                </div>
                                <div className="count-container">
                                <h2>DEATHS CASES,IND</h2>
                                <p><CountUp end={Deaths} separator="," /></p>
                                
                                </div>

                                <div className="count-container">
                                <h2>NEW  CASES,IND</h2>
                                <p><CountUp end={today} separator="," /></p>
                                </div>
                        </div>
                           
                           <div className="covid-info">
                               <p>Helpline Number: +91-11-23978046
Toll Free: 1075
Helpline Email ID: ncov2019@gov.in</p>
                           </div>
                </div>

            </div>
        </Bounce>
        </div>
            
        </>
    )
}
