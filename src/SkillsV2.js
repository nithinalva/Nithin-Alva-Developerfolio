import {React,useState }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockImage from 'react-block-image'
import { Keyskills } from './Keyskills';
import Fade from 'react-reveal/Fade';
import { Domainskills } from './components/Domainskills';

export const SkillsV2 = () => {
  

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container-fluid     h-md-100   w-90 ml-2 skillsv2-section skillsv2 ">

            {/* <div className="row h-100 w-100 roqqq">
              
                    <div className=" col col-sm-6 row c2 d-flex align-items-center">
                    <div className="w-100 bg-white">
                                        <h1>MY SKILLS</h1>
                                </div>
                                <div className= "animation-img bg-white h-75 w-100 d-flex align-items-center">

                                        <div className="yoga-img-handler w-100 h-100">
                                                <img src="/images/yoga-bg.png" onContextMenu="return false;">
                                                </img>
                                                <img src="/images/yoga-boy.png " className="image2  yoga-img animate__animated  animate__shakeY animate__infinite 	 infinite"></img>
                                        </div>



                                </div>

                        
        
                     </div>
                            

            </div>
       */}

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
             
                    
                <div className= "animation-img w-75 h-75 ">

                <div className="yoga-img-handler">
                                                <img src="/images/yoga-bg.png" onContextMenu="return false;">
                                                </img>
                                                <img src="/images/yoga-boy.png " className="image2  yoga-img animate__animated  animate__shakeY animate__infinite 	 infinite"></img>
                                        </div>


                </div>
                </div>

                <div className=" col-sm-8 col-md-12 col-lg-6 mt-4">
                <div className="container header mt-3  ">
                        <h1 className="display-1 sm-1">What i do??</h1>
                        <p className="h4 text-secondary">Crazy full stack developer who wants to explore on every stack</p>


                        
                    </div>

                    <div className="container d-flex col-lg-12 col-xs-8">
                               
                    <button type="button " class="btn btn-outline-dark  " onClick={()=>toggleTab(1)}>KEY SKILLS</button>
                    <button type="button" class="btn btn-outline-dark " onClick={()=>toggleTab(2)}>DOMAIN SKILLS</button>
                    <button type="button" class="btn btn-outline-dark  ">OTHER SKILLS</button>
                    </div>
                          
                        <div className="container cc">
                       
                            <Keyskills state={toggleState}/>
                            <Domainskills state={toggleState} />
                            
                        </div>
                    
                </div>
            </div>



                        
       
        </div>
        
    )
}
