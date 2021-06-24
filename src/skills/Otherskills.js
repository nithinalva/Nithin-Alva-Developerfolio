import React from 'react'
import Fade from 'react-reveal/Fade';
export const Otherskills = ({state}) => {
    
    if(state!==3) return null
    return (
        <Fade>
        <div className="d-flex flex-wrap justify-content-center bg-white shadow-sm p-3 mb-5 bg-white rounded domain">
        <i class="devicon-html5-plain-wordmark clr"></i>
        <i class="devicon-bootstrap-plain-wordmark clr"></i>
        <i class="devicon-css3-plain-wordmark clr"></i>
     
        <i class="devicon-javascript-plain clr"></i>
        <i class="devicon-react-original-wordmark clr"></i>
        <i class="devicon-nodejs-plain clr"></i>
        <i class="devicon-express-original clr">
              
        </i>
 
        <i class="devicon-mongodb-plain-wordmark clr"></i>
    
        <i class="devicon-mysql-plain-wordmark clr"></i>
        <i class="devicon-python-plain-wordmark clr"></i>
        <i class="devicon-jupyter-plain-wordmark clr"></i>
        <i class="devicon-cplusplus-plain-wordmark clr"></i>
        <i class="devicon-java-plain-wordmark clr"></i>
        <i class="devicon-c-line-wordmark clr"></i>
        <i class="devicon-materialui-plain clr"></i>
        <i class="devicon-npm-original-wordmark clr"></i>
        <i class="devicon-photoshop-plain clr"></i>
        <i class="devicon-php-plain clr "></i>
        <i class="devicon-sass-original clr"></i>
       
        </div>
        </Fade>
    )
}
