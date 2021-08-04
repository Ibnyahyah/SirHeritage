import React from 'react';


const HotBody = () =>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            <div className="col-sm-3">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                    <p className="text-center mt-2  mb-4">Kid's Cloth</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                     <p className="text-center mt-2  mb-4">Gobi Cap</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                     <p className="text-center mt-2  mb-4">Awolowo cap</p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                     <p className="text-center mt-2  mb-4">Lastest jalab</p>
                </div>
            </div>
         </div>      
    )
}

const HotBody2 = () =>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            <div className="col-sm-4">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                    <p className="text-center mt-2  mb-4">Dan-shiki</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                     <p className="text-center mt-2  mb-4">KhafThan</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="arrival-image">
                    <img src="/images/test1.jpg"/>
                     <p className="text-center mt-2  mb-4">Cufflinks</p>
                </div>
            </div>
         </div>      
    )
}

const NewHot =()=>{
    return(
        <div style={{ background: '#fff', padding: '20px 0' }}>
        <div className="new-arrival container">
            <HotBody/>
            <HotBody2/>
        </div>
        </div>
    )
}
export default NewHot;