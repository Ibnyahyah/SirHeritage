import React from 'react';


const WhoWeAre = () =>{
    return(
        <div className="col-sm-6 mt-lg-5 who-we-are">
            <h1>Who we are ?</h1>
            <div className="WhoWeAre-content">
                <p>We are SirHeritage is a modren fashion institude.
                    We are hear to make wears simple annd affordable for everyOne
                </p>
            </div>
        </div>
    )
}

const WhatWeDo =()=>{
    return(
        <div className="col-sm-6 whatWeDo">
            <h1>What We Do</h1>
            <div>
                <dl>
                    <dt>Tutoring</dt>
                    <dd>Teaching student who are interestedin learning how to build a good dress.</dd>
                    <dt>Building</dt>
                    <dd>We expext in making nice looking clothes for both Male and female, Kids and Adults .</dd>
                    <dt>Ready Made Wear</dt>
                    <dd>We have Already made clothes at affordable rate.</dd>
                </dl>
            </div>
        </div>
    )
}

class KnowUs extends React.Component{
    render(){
        return(
            <div className="container KnowUs">
                <div id="header">            
                    <h1>
                        Know Us more
                    </h1>
                <div className="line"></div>
                </div>
                <div className="row my-5">
                    <WhoWeAre/>
                    <WhatWeDo/>
                </div>
            </div>
        )
    }
}
export default KnowUs;