import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap,FaUserGraduate} from "react-icons/fa";

export const Education = () => {
    return (
        <div className="education-section" id="education" >
            <div className="education-container">
            <div className="education-heading">
            <h1>Education</h1>
            </div>

        
            
            <div className="education-timeline"  >
            <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
            <VerticalTimelineElement 
             className="vertical-timeline-element--work"
                contentStyle={{ background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '#8A2BE2' }}
            date="2015 - 2020"
            iconStyle={{  background: '#8A2BE2', color: '#fff'}}   icon={<FaUserGraduate />}>
                <h3 className="vertical-timeline-element-title">GRADUATION</h3>
     
                <h4 className="vertical-timeline-element-subtitle">DAYANANDA SAGARA ACADEMY OF TECHNOLOGHY AND MANAGEMENT</h4>
                <p>Stream:Information Science <br/> University:Visvesvaraya Technological University  <br/> Location:Bengaluru</p> 
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
             className="vertical-timeline-element--work"
                contentStyle={{  background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2013 - 2015"
                iconStyle={{  background: '#8A2BE2', color: '#fff'}} icon={<FaGraduationCap />}>
                <h3 className="vertical-timeline-element-title">I AND II PUC</h3>
                <h4 className="vertical-timeline-element-subtitle">MAHATMA GANDHI MEMORIAL COLLEGE UDUPI</h4>
                <p> Board:Department Of Pre-University Education<br/>
                Location:Udupi 
               
                </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
             className="vertical-timeline-element--work"
                contentStyle={{  background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - 2013"
            iconStyle={{  background: '#8A2BE2', color: '#fff'}} icon={<FaGraduationCap />}>
                <h3 className="vertical-timeline-element-title">HIGH SCHOOL</h3>
                <h4 className="vertical-timeline-element-subtitle">T A PAI ENGLISH MEDIUM HIGH SCHOOL</h4>
                <p>
                Board :Karnataka Secondary Education Examination Board
                Location:Udupi
                </p>
            </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
            </div>
        </div>
    )
}
