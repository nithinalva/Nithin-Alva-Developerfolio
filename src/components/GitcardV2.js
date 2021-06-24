import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export const GitcardV2 = (props) => {
    return (
        <Router>
        <div className=" card-1 h-50 mt-4 shadow-sm p-3 pr-3  shadow-sm p-3  bg-white rounded ">
          <div className="row proj-h ">

         
          <h6>{props.projectname}
          
          </h6>
        
          
          </div>
        
          <br/>
          <div className="row"><p className="h6">Language :{props.language}</p><br/>
          </div>
        <div className="row position-relative proj-desc text-secondary pl-1">
        <p>
       {props.desc}
        </p>
      
        </div>
        <div className="row pl-1" >
          <sub>Updated On: {props.updated}</sub>
          </div>
               <div className="row mt-4">

               <div className ="col-6 col-sm-5 col-md-7 col-lg-7  fork-and-rating">
                 <p className="h5"><i class="fa fa-code-fork" aria-hidden="true">:{props.fork}  </i>     <i class="fa fa-star ml-1"></i>:{props.stars} </p>  
                 </div>
                 
              <div>
              <Link to={{pathname:props.link}} target="_blank">  
              <Button type="button" className=" mr-1  btn-sm btn-default som-bt">REPOSITORY</Button>
              </Link>
              </div>
                </div>
    


        </div>
        </Router>
    )
}
