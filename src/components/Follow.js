import React from 'react'
import Bounce from 'react-reveal/Bounce';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import styled from 'styled-components'


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

export const Follow = () => {
    return (
      
        <Router >
       
        <div className="follow-section">
            <h1>ALSO FOLLOW ME ON</h1>

         
            <div className="media-buttons">
            <Bounce top>
            <MenuLink>
            <ul>
            <Link   to={{ pathname: "https://www.facebook.com/nithin.merciless.5" } } target="_blank"  > <li><a className="reset-a"><i class="fab fa-facebook" aria-hidden="true"></i></a></li></Link>
  {/* <Link to={{ pathname: "https:www.google.com" }} target="_blank" />  <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li> */}
    <Link to={{pathname:"https://twitter.com/nithinAlva"} } target="_blank" > <li><a><i class="fab fa-twitter" aria-hidden="true"></i></a></li></Link>
        <Link to={{pathname:"https://www.linkedin.com/in/nithin-sk-b2a857175/"}} target="_blank"> <li><a ><i class="fab fa-linkedin" aria-hidden="true"></i></a></li> </Link>
         <Link to={{pathname: "https://www.instagram.com/nithin.alva/ "}} target="_blank"> <li><a ><i class="fab fa-instagram" aria-hidden="true"></i></a></li> </Link>
</ul>
</MenuLink>
</Bounce>
            </div>
        
        </div>
        
        </Router>
       
    )
}
