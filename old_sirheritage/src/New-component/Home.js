import React from 'react';
import NavBar from './Nav';

const HomeText = () =>{
    return (
        <div className="col-sm-6">
            <h6>Welcome to SirHeritage</h6>
            <h1 className="head-text">A Unique Wear Designer.</h1>
            <p className="paragraph-text">We Specialize on any kind of Wears such as Native wears, English wears,Caps and many others.
            </p>
            <div className="btn primary-btn">
            <a href="#gallery" className="btn btn-primary">See more</a>
            </div>
        </div>
    )
}

const HomeSection = () => {
    return(
        <div className="container-fluid pb-5 main-section-home">
             <NavBar/>
            <div className="row main-section-row">
                <HomeText/>
            </div>
        </div>
    )
}
export default HomeSection;