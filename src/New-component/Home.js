import React from 'react';
import NavBar from './Nav';
import {HomeImg} from './Image';

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

const HomeImage = ()=>{
    return (
        
        <div className="col-sm-6" >
        <div className="image">
            <div className="row">
        {HomeImg.map((item, index)=>{
            return(
                        <div className="col-6 mb-2" key={index}>
                            <img src={item.url} alt={item.alt}/>
                        </div>
            )
        })}
        </div> 
    </div>
</div>
    )
}

const HomeSection = () => {
    return(
        <div className="container-fluid pb-5 main-section-home">
            <div className="row main-section-row">
                <HomeText/>
                <HomeImage/>
                <NavBar/>
            </div>
        </div>
    )
}
export default HomeSection;