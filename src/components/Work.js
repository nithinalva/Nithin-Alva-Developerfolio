import Fade from 'react-reveal/Fade';
import React from 'react'

export const Work = () => {
    return (
        <div className="work-section">

            <div className="works">
            <div className="work-heading">
                <h1>Internships and Careers</h1>
                
            </div>
            <div className="works-column">
            
            <div className="internship"> 
            
            <Fade left>
                <div className="ethnus">
                    <div className="ethnus-logo"> 
                        <img src="https://media.glassdoor.com/sqll/841455/ethnus-services-squarelogo-1457094444494.png"/>
                     </div>
                     <h1>Ethnus Consultancy Pvt .Ltd</h1>
                     <p style={{color: "#C0C0C0"}} >(Intern) 2019-20</p>
                     <br/>
                        <div className="ethnus-desc">
                                <p>Developed a Telegram-Bot to order foods at the restaurant.Whenever a customer walks into a restaurant the chat-bot Will detect the user’s location and it sends the food menu Of the particular restaurant to the customer .The customer can Can also order foods through telegram bot. once the order has been made the order details will be then sent to the chef’s UI .On receiving the order the chef cooks the food and it will be Served to the customer’s table.</p>
                        </div>
                </div>
    </Fade>
            </div>



            <div className="working"> 
            <Fade right>
                <div className="fresher">
                    <div className="fresher-logo">
                        <img src="https://thumbs.gfycat.com/ComplexGracefulAlpinegoat-size_restricted.gif"/>
                    </div>
                        

                    <h1> I'm a Fresher </h1>
                        <div className="fresher-desc">
                            <br/>
                            <p>An enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in Information Science Engineering. Proficient in ReactJS,HTML CSS, PYTHON, JAVASCRIPT, and a bit of MongoDB. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>

                        </div>
                      
                        </div>
                        </Fade>
                </div>
               
  
            </div>
            
            </div>
            
           
        </div>
        
    )
}
