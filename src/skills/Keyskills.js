import React from 'react'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import ProgressProvider from './ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import Fade from 'react-reveal/Fade';
export const Keyskills = ({state}) => {
    if(state!==1) return null
    return (
        <Fade>
        <div className="d-flex justify-content-center bg-white shadow-sm p-3 mb-5 bg-white rounded domain">

<div className="mr-2">
          <ProgressProvider
                            valueStart={0} valueEnd={66}>
                            {(value) => <CircularProgressbar value={value} text={`${66}%`}   styles={buildStyles({ pathColor: `rgba(32, 0, 130, ${66 / 100})`,
                                textColor: '#200082',
                            trailColor: '#d6d6d6',
                        backgroundColor: '#62009C',
                         })}/>}


         </ProgressProvider>
         <p className="text-center">HTML & CSS</p>
</div>

<div className="mr-2">
         <ProgressProvider
                            valueStart={0} valueEnd={66}>
                                	{/* 98	0	156 */}
                            {(value) => <CircularProgressbar value={value} text={`${66}%`}   styles={buildStyles({ pathColor: `rgba(32, 0, 130, ${66 / 100})`,
                                textColor: '#200082',
                            trailColor: '#d6d6d6',
                        backgroundColor: '#62009C',
                         })}/>}
         </ProgressProvider>

         <p className="text-center">ReactJs</p>
 </div>

 <div className="mr-2">
         <ProgressProvider
                            valueStart={0} valueEnd={66}>
                            {(value) => <CircularProgressbar value={value} text={`${66}%`}   styles={buildStyles({ pathColor: `rgba(32, 0, 130, ${66 / 100})`,
                                textColor: '#200082',
                            trailColor: '#d6d6d6',
                        backgroundColor: '#62009C',
                         })}/>}
         </ProgressProvider>
         <p className="text-center">NodeJs</p>
         </div>
        </div>
        </Fade>
    )
}
