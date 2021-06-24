import React from 'react'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const MenuLink=styled.ul` 
position:relative;
justify-content: center;
margin:0;
padding:0;
display:flex;




ul li {
  list-style: none;
}

ul li a {
  position: relative;
  width:60px;
  height:60px;
  display:block;
  text-align:center;
  margin:0 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration:none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: .5s;
}

ul li a:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  text-decoration:none;
}

ul li a .fab {
  width: 100%;
  height:100%;
  display:block;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size:24px;
  color: #262626;
  transition: .5s;
}

ul li:nth-child(1) a:hover .fab {
  color: #3b5998;
}

ul li:nth-child(2) a:hover .fab {
  color: #00aced;
}

ul li:nth-child(3) a:hover .fab {
  color: #dd4b39;
}

ul li:nth-child(4) a:hover .fab {
  color: #007bb6;
}

ul li:nth-child(5) a:hover .fab {
  color: #e4405f;
}


`

export const Contact = () => {
    return (
      
        <div className="contact-section" id="contact">
            <div className="contact-container">

                    <div className="contact-row-1">
                        <div className="heading1">
                            <div className="title">
                            <h1>GET IN</h1>
                                <h2>TOUCH</h2>


                                </div>
                    <div className="emails">
                   {/* <a className="xys"><i class="far fa-envelope">NSK254@gmail.com</i></a> <br/> */}
                   <Bounce left><p><i class="fas fa-envelope"></i> NSK254@gmail.com</p> </Bounce>
                  {/* <a> <i class="fas fa-phone-square-alt">   7760558735/8088249606</i></a> */}

                  <Bounce left>     <p><i class="fas fa-phone-square"></i> (+91) 7760558735</p></Bounce>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Bengaluru,India</p>
                    </div>
                            <div className="contact-details">
                            <div className="media-buttons">
                           {/* <a> <i class="far fa-envelope"> NSK254@GMAIL.COM</i></a> */}
                           <Router>
            <MenuLink>
            <ul>
            <Link   to={{ pathname: "https://www.facebook.com/nithin.merciless.5" } } target="_blank"  > <li><a className="reset-a"><i class="fab fa-facebook" aria-hidden="true"></i></a></li></Link>
  {/* <Link to={{ pathname: "https:www.google.com" }} target="_blank" />  <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li> */}
    <Link to={{pathname:"https://twitter.com/nithinAlva"} } target="_blank" > <li><a><i class="fab fa-twitter" aria-hidden="true"></i></a></li></Link>
        <Link to={{pathname:"https://www.linkedin.com/in/nithin-sk-b2a857175/"}} target="_blank"> <li><a ><i class="fab fa-linkedin" aria-hidden="true"></i></a></li> </Link>
         <Link to={{pathname: "https://www.instagram.com/nithin.alva/ "}} target="_blank"> <li><a ><i class="fab fa-instagram" aria-hidden="true"></i></a></li> </Link>
</ul>
</MenuLink>
</Router>
 </div>
        
                            </div>
                                
                        </div>
                        <div className="profile">

                              <div className="profile-img">
                              <Fade>
                                    <img src ="https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/119462433_1403833719816172_4308367676970215698_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dk0Ej4SDeOsAX8nkcTc&tn=h3Xm48bZDNuzZKv2&_nc_ht=scontent.fblr22-1.fna&oh=15d64a02d568e3af7371d0b7eabd10d7&oe=60DAADF5"/>
                                    </Fade>
                                    </div>
                                   
                        </div>
                    </div>

                    <div className="contact-row-2">


                    </div>
            </div>
        </div>
     
    )
}
