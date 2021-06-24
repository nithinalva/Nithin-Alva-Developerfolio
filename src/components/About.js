import React from 'react'
import Typical from 'react-typical'
import Fade from 'react-reveal/Fade';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"




export const About = () => {
    return (
        <div className="about-section">
              <div className="main">
        
        <div className="content">

       

        <div className="main-text">
            
            
                <h1>
                <Typical

                    steps={['Front-End Developer',3000,'Full-Stack Developer',3000]}
                    loop={Infinity}
                    wrapper='h1'
                    
               />
               </h1>

                
           
             <p>Hello Folks.I'm Nithin Alva!<br/>An enthusiastic self-taught programmer.<br/> i'm 24 years old, keep scrolling to know more about me.</p>
             <Router style={{textDecoration:"none"}}>
             <Link to={{ pathname: "https://github.com/nithinalva" }} target="_blank"  ><button className="btn1"><i className="fa fa-github" ></i> Github</button></Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/nithin-sk-b2a857175/" }} target="_blank" >  <button className="btn-lin"><i className="fa fa-linkedin"></i> Linkedin</button></Link>

             </Router>
        </div>

        <Fade right>
        <div className="logo1">
            <img src= "https://media1.tenor.com/images/9fb771fb621c29b0a2eae945b5ceeeb3/tenor.gif?itemid=19019116" alt=""/>

        </div>
        </Fade>
    
</div>
</div>

        </div>
        
    )
}
