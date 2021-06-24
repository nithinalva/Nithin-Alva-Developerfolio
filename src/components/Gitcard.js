import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"



export const Gitcard = (props) => {
    return (
        <Router>
        <div className="gitcard">
            <div className="git-heading">
          <h1>  <i class="fab fa-github"></i> {props.projectname}</h1>
            </div>
            <div className="git-desc">
            <p>Language:{props.language}</p>
         
        <Link to={{pathname:props.link}} target="_blank">  
          <button class="button"><span className>VIEW REPOSITORY</span></button>
          
          </Link>  
            </div>

        </div>
        </Router>
    )
}
