import React from 'react'
import ProgressBar from 'react-animated-progress-bar';
import Fade from 'react-reveal/Fade';

export  const  Domainskills = ({state}) => {
    if(state!==2) return null
    return (
        <Fade>
        <div className="flex-row justify-content-center bg-white shadow-sm p-3 mb-5  bg-white rounded domain">
            
            <p className="h6 c">FRONTEND</p>
     
            <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="80"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
        defColor={{
            fair: 'orangered',
            good: '#62009C',
            excellent: '#62009C',
            poor: 'red',
          }}
      />

<p className="h6  ">BACKEND</p>
     
<ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="50"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
        defColor={{
            fair: 'orangered',
            good: '#62009C',
            excellent: '#62009C',
            poor: 'red',
          }}
          className="prog-bar"
      />
        </div>
        </Fade>
    )
}
