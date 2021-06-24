import React from 'react'
import  { useState } from 'react'
import {Keyskills} from '../skills/Keyskills';
import {Domainskills}  from '../skills/Domainskills';
import {Otherskills} from '../skills/Otherskills';

export const SkillsV3 = () => {
    const [tabs, toggletabs] = useState(1)

    const changeValues=(index)=>{

      return toggletabs(index)
    }


    return (
        <div className="">
        <div className="container-fluid  pt-lg-5 pt-sm-0 justify-content-lg-center sk mb-5">
            <div className="row  mt-xs-0 mt-md-0 "> 
                <div className="col-lg-7 col-md-6 col-xs-12">
                  
                    <div className="yoga-img-handler  ">

                    <img src="/images/yoga-bg.png" onContextMenu="return false;">
                                        </img>
                                        <img src="/images/yoga-boy.png " className="image2  yoga-img animate__animated  animate__shakeY animate__infinite 	 infinite"></img>



                    </div>
                </div>









                <div className=" col-lg-5 col-md-6 col-xs-12">
                       
                    <div class="example h5">What i do?</div>
                    <div className= "p-3">
                    <p className="h5 text-secondary mob-font">Crazy full stack developer who wants to explore on every stack!!!</p>

                    </div>
                    
                        <div className=" d-flex-inline flex-nowrap  justify-content-lg-start mt-3b button-div">

                        {/* <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                             <button type="button" class="btn btn-secondary" onClick={
                                 ()=>changeValues(1)
                             }>KEY SKILLS</button>
                             <button type="button" class="btn btn-secondary" onClick={
                                 ()=>changeValues(2)
                             }>DOMAIN SKILLS</button>
                                <button type="button" class="btn  btn-secondary">OTHER SKILLS</button>
                        </div> */}
                          <button type="button" class="btn btn-sm mr-1 " onClick={
                                 ()=>changeValues(1)
                             }>Key Skills</button>

                <button type="button" class="btn btn-sm mr-2 " onClick={
                                 ()=>changeValues(2)
                             }>Domain Skills</button>

<button type="button" class="btn btn-sm mr-2 " onClick={
                                 ()=>changeValues(3)
                             }>Other Skills</button>

                        
                        </div> 

                  

                                <div className="container skills-container justify-content-center pt-3">
                                        <Keyskills state={tabs}/>
                                        
                                        <Domainskills state={tabs}/>
                                        <Otherskills state={tabs} />
                                </div>
                    
                </div>
            </div>
        </div>

</div>
    )
}
