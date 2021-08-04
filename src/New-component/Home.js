import React from 'react';

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
        <div className="col-sm-6">
            <div className="image">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/test5.jpg" alt="Agbada's image"/>
                    </div>
                    <div className="col-6">
                        <img src="/images/test6.jpg" alt="Buba ati sokoto image"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src="/images/test7.jpg" alt="Shirt's image"/>
                    </div>
                    <div className="col-6">
                        <img src="/images/test5.jpg" alt="Trouser's image"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src="/images/test6.jpg" alt="Suit's image"/>
                    </div>
                    <div className="col-6">
                        <img src="/images/test7.jpg" alt="Cap's image"/>
                    </div>
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
            </div>
        </div>
    )
}
export default HomeSection;