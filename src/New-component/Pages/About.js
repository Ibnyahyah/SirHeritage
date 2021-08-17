import React from 'react';
import { Link } from 'react-router-dom';


const AboutHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fff', color: '#000', padding: '20px', textAlign:'center'}}>
            <div>
                <Link to="/">
                    <img src="./logo5.png" alt="logo" width="100" height="100"/>
                </Link>
                <hr/>
               <h1>About Us</h1>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Home </Link>||<Link to="/contact" style={linkStyle}> Contact us</Link>
            </div>
       </div>
    )
}
const  linkStyle ={
    color: '#000'
}

const AboutContent=()=>{
    return(
        <div className="row about">
            <div className="profile">
                <img src="./images/Shop/WhiteShirt.jpg" alt="SirHeritage CEO"/>
            </div>
            <div className="about-content">
                <p>
                Our favorite part of being a professional
                 photographer is the passion to make a difference
                 and to make a significant change in creating a story
                 through what we captured. our aim is to create a virtual
                 experience for businesses across the globe. Focusing on
                 creating values through media technology. What makes us different
                 is our ability to understand what our customers need and to deliver
                 quality services that will create a long-lasting relationship. </p>
                 <p>We do not restrict our services to photographing
                     weddings or events in the city, we have wider
                      experience in adventures, travel photography
                     and product shots. we love to create a unique
                     memory that can express love and natural ideas.
                     We are devoted to utilizing developing advancements
                     to give the most elevated amount of value in terms
                     of Photography, Cinematography, and Training
               </p>
            </div>
        </div>
    )
}

export default class About extends React.Component{
    render(){
        return(
            <div>
            <AboutHeader/>
            <AboutContent/>
            </div>
        )
    }
}