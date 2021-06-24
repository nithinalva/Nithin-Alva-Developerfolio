import {useEffect, React} from 'react'
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import ProgressBar from 'react-animated-progress-bar';
import Fade from 'react-reveal/Fade';

                   

             
  
export const Skills = () => {
    
//    useEffect(() => {

    
    
//    }, [])


  
    return (
        
        
        <div className="skills-section" id="skills">
              
    
            {/* skill section */}
                    <div className="skills">
                    <div className="skills-heading">
                        <h1 >Proficiency</h1>
                        
                     </div>

                     
                        {/* skills */}
                            <div className="progress-bar-container">
                                <div className="progress-main">
                                    <div className="progress-heading">
                                    <Fade bottom>
                                     <h2> KEY SKILLS</h2>
                                     </Fade>
                                    </div>
                                  
                                    <div className="progress-bar-1"> 
                                   

                                    {/* <CircularProgress size="160px"    hasStripe  value={percentage} />

                                    <CircularProgress  size="160px" value={80} />
                                    <CircularProgress  size="160px" value={80} /> */}

                                       
                                       <div className="card">
                                             <div className="circle">


                                                    {/*  */}

                                                    <div className="bar"> </div>

                                                        <div className="box">
                                                            <span>80%</span>
                                                        </div>



                                                   

                                       
                                       
                                       
                                       
                                            </div>
                                            <div className="text">HTML & CSS</div>
                                            
                                        </div>      

                                        <div className="card react">
                                            
                                                    <div className="circle">
{/* 

                                                                                    
                                                       */}

                                                        <div className="bar">  </div>

                                                        <div className="box">
                                                            <span>80%</span>
                                                        </div>



                                                  

                                                    </div>
                                                    <div className="text">ReactJS</div>
                                            
                                            </div>     


                                            <div className="card">
                                            
                                            
                                                         <div className="circle">
                                                         <div className="bar">  </div>

                                                                 <div className="box">

                                                                         <span>80%</span>
                                                                </div>

                                           
                                                        </div> 
                                                
                                             <div className="text">Javascript</div>

                                            </div>     

       
                                    </div>


                                    </div>
                                        <div className="progress-bar-2">
                                        <Fade bottom>
                                         <h3>DOMAIN SKILLS</h3>  
                                         </Fade>
                                        <h1>Frontend</h1>
                                        <ProgressBar 
     
        height="15px"
        rect
        fontColor="gray"
        
        percentage="80"
        rectPadding="1px"
        rectBorderRadius="10px"
        trackPathColor="transparent"
        
        trackBorderColor="grey"
        defColor={{
            fair: 'orangered',
            good: '#a445b2',
            excellent: '#7423d6',
            poor: 'red',
          }}
        
      />

<h1>Backend</h1>

<ProgressBar 
     
     height="15px"
     rect
     fontColor="gray"
     
     percentage="60"
     rectPadding="1px"
     rectBorderRadius="10px"
     trackPathColor="transparent"
     
     trackBorderColor="grey"
     defColor={{
         fair: 'orangered',
         good: ' #7423d6',
         excellent: 'green',
         poor: 'red',
       }}
     
   />

   



                                        </div>

                            </div>
                            <div className="logo">
                                <div className="heading">
                                <Fade bottom>
                                    <h1>OTHER SKILLS AND LANGUAGES</h1>
                                </Fade>
                                </div>
                            <div className="logo-container">
                              <Fade top>
                            <img src="https://www.seekpng.com/png/full/80-803527_html5-css3-and-javascript-logos-html5-logo-png.png"/>
                            <img src="http://www.pngmart.com/files/7/Python-PNG-File.png"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"></img>
                            <img src="https://img.icons8.com/color/452/mongodb.png"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png"></img>
                            <img src="https://freepngimg.com/thumb/java/85390-java-language-text-programming-logo-programmer.png"></img>
                            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png"></img>
                            <img src="https://brandeps.com/logo-download/C/C-Sharp-logo-vector-01.svg"></img>
                            <img src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png"></img>
                            <img src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg
                            "></img>
                            <img src="https://www.nicepng.com/png/full/407-4075705_photoshop-photoshop-cs6-png-logo.png"></img>
                            {/* <img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/vb-header.png"></img> */}
                            </Fade> 
                            </div>
                            </div>
                </div>
                                         
                <Helmet>
                <script type="text/javascript" src="script.js"></script>
                 </Helmet>
        </div>

        

     
        
    )
}
