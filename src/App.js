
import './App.css';

import { About } from './components/About';
import { Education } from './components/Education';
import { Navbar } from './components/Navbar';
import Projects from './components/Projects';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import ScrollUpButton from "react-scroll-up-button";
import { Follow } from './components/Follow';
import { Socials } from './components/Socials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import axios from 'axios';
import {useEffect,useState} from 'react'
import { SkillsV2 } from './SkillsV2';
import { SkillsV3 } from './components/SkillsV3';


function App() {


  const [covid, setcovid] = useState([])
  const [covidData, setcovidData] = useState([])

  const [isOpen, setOpen] = useState(false)


  useEffect(() => {

    const fetchData1= async()=>{

        const result1=await axios( 'https://corona.lmao.ninja/v2/countries/India?today=true&strict=true&query')
        // console.log(result1.data)
        setcovidData(result1.data)


        const timer = setTimeout(() => {

          setOpen(true)
     
          
        }, 7000);      return () =>  clearTimeout(timer)
    
    }
    fetchData1(); 
}, [])


  return (
    <div>

     
       <ScrollUpButton   style={{"background-color":"	indigo"}}/>
    
      <Navbar/>
    
      <About/>
      <Follow/>
      <Education/>
      {/* <Skills/> */}
      {/* <Skills/> */}
   <SkillsV3/>
      <Work/>
      <Projects/>
      <Socials/>
      <Contact/>
      <Footer/>

   <Modal setopen={setOpen} Open={isOpen} Confirmed={covidData.cases} Recovered={covidData.recovered} Deaths={covidData.deaths} today={covidData.todayCases} />

  
  


  {/* {
    covidData.map((count)=>console.log(count.todayCases ))
  }
   */}
    
    </div>


    
  );
}

export default App;
