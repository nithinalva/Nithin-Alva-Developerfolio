import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Gitcard } from './Gitcard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from 'react-reveal/Slide';
import { GitcardV2 } from './GitcardV2';
import env from "react-dotenv";

const Projects = () => {

    const [data, setdata] = useState([]);
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
     
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    
    useEffect(() => {

 
        
        const fetchData= async()=>{

        const result=await axios(`https://api.github.com/users/nithinAlva/repos?&sort=created:asc&client_id=24ffd50eb19139930614&client_secret=7a20b77e77222aed6091aacec9e70c1849dafec0`)

        // console.log(result.data);

        setdata(result.data);
        
        }
        fetchData();
    }, [])
    function ChangeFormateDate(oldDate)
    {
       return oldDate.toString().split("-").reverse().join("-");
    }
    return (
        <div className="project-section " id="projects">
           <div className="project-heading">
               <h1>Projects/REPOSITORIES</h1>
           </div>
            <div className="projects shadow-sm bg-white">
              <Fade left>
            <Carousel responsive={responsive}>
            {data.map((git)=>(
                // console.log(`my project names are ${git.name}and languages used are ${git.language!=null? git.language:"no lang"} and owner is ${git.html_url}`)
                
               
                    // <Gitcard key={git.id} projectname={git.name} language={git.language!=null? git.language:"N/A"} link={git.html_url}/>
                    <GitcardV2 key={git.id} stars={git.stargazers_count} projectname={git.name} desc={git.description} link={git.html_url}  fork={git.forks} language={git.language!=null? git.language:"N/A"} updated={ChangeFormateDate(git.updated_at.slice(0,10))}/>


            ))}
            </Carousel>
            </Fade>

     
            </div>
            
        </div>
    )
}

export default Projects
