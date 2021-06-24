import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-animated-progress-bar';
import { Line, Circle } from 'rc-progress';
import Fade from 'react-reveal/Fade';
export const Domainskills = ({state}) => {
    if(state!==2) return null
    return (

        <>
        <Fade>
        <div className="align-items-center  justify-content-center  bg-primary w-75 shadow-sm p-3 mb-5 mt-1 bg-white rounded mt-2 ">
            
         
           
        <ProgressBar
        width="500px"
        height="15px"
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
            good: 'yellow',
            excellent: 'rgb(119, 8, 231)',
            poor: 'red',
          }}
      />
      
       <p className="h5">BACKEND</p>
    
        <ProgressBar
        width="500px"
        height="15px"
        rect
        fontColor="gray"
        percentage="60"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
        defColor={{
            fair: 'orangered',
            good: 'rgb(119, 8, 231)',
            excellent: 'rgba(32, 0, 130, 0.66)',
            poor: 'red',
          }}
      />

        </div>
        </Fade>
        </>
    )
}
