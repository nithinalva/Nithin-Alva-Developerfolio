import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';
import Fade from 'react-reveal/Fade';


export const Keyskills = ({state}) => {
        if(state!==1) return null

    return (
        <>
            <Fade>
        <div className=" row align-items-center  justify-content-center;  bg-primary w-75 shadow-sm p-3 mb-5 mt-1 bg-white rounded mt-2">
            <div className="col-4 w-75  ">
                
            <ProgressProvider
                            valueStart={0} valueEnd={66}>
                            {(value) => <CircularProgressbar value={value} text={`${66}%`}   styles={buildStyles({ pathColor: `rgba(32, 0, 130, ${66 / 100})`,
                                textColor: '#200082',
                            trailColor: '#d6d6d6',
                        backgroundColor: '#200082',
                         })}/>}
         </ProgressProvider>
        
         <p className="text-center mt-1">HTML</p>
       
               
                </div>
                <div className="col-4 ">
                <ProgressProvider
                            valueStart={0} valueEnd={66}>
                            {(value) => <CircularProgressbar value={value} text={`${66}%`}   styles={buildStyles({ pathColor: `rgba(32, 0, 130, ${66 / 100})`,
    textColor: '#200082',
    trailColor: '#d6d6d6',
    backgroundColor: '#200082',
    })}/>}
                            </ProgressProvider>
                            <p className="text-center mt-1">ReactJS</p>
            </div>

            <div className="col-4 ">
                            <ProgressProvider
                            valueStart={0} valueEnd={66}>
                            {(value) => <CircularProgressbar value={value} text={`${66}%`}   styles={buildStyles({ pathColor: `rgba(32, 0, 130, ${66 / 100})`,
    textColor: '#200082',
    trailColor: '#d6d6d6',
    backgroundColor: '#200082',
    })}/>}
                            </ProgressProvider>
                            <p className="text-center mt-1">NodeJs</p>
            </div>
        </div>

</Fade>
        </>
    )
}
