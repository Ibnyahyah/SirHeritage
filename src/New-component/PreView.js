import React from 'react';
import { SeacrhInput } from './InputSection';
import WYSk from './WhatYouShouldKnow';
import { Images } from './Image';
import { Faqs } from './WhatYouShouldKnow';

const PreViewRoll1 =()=>{
    return(
            <div className="gallery-row py-3">
                {Images.map((item, index) => {
                    return(
                    <div className="col-sm-2">
                        <ul id="autoWidth" className="cs-hidden">
                            <li className={item.Cname}>
                                <div className="gallery-box">
                                    <div className="gallery-image" key={index}>
                                        <img src={item.url} alt={item.alt} />
                                    </div>
                                </div>
                            </li>
                        </ul>   
                    </div>
                    )
                })}
            </div>    
    )
}
const PreView = () =>{
    return(
            <div className="service-section"  id="gallery">
                <SeacrhInput/>
                <WYSk/>
                <PreViewRoll1/>
                <Faqs/>
            </div>
    )
}
export default PreView;