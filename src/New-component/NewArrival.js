import React from 'react';
import {NewTrending} from './Image';
import {NewTrending2} from './Image';


const HotBody = () =>{
    return(
        <div className="row py-3 d-flex justify-content-between">
               {NewTrending.map((item, index)=>{
                   return(
                <div className="col-sm-3">
                    <ul id="autoWidth" className="cs-hidden">
                        <li className={item.Cname}>
                            <div className="gallery-box-2">
                                <div className="arrival-image">
                                    <img src={item.url} alt={item.alt}/>
                                    <p className="text-center mt-2  mb-4">{item.paragraph}</p>
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

const HotBody2 = () =>{
    return(
        <div className="gallery-row py-3">
            {NewTrending2.map((item, index)=>{
                   return(
                <div className="col-sm-2">
                    <ul id="autoWidth" className="cs-hidden">
                        <li className={item.Cname}>
                            <div className="gallery-box-2">
                                <div className="arrival-image">
                                    <img src={item.url} alt={item.alt}/>
                                    <p className="text-center mt-2  mb-4">{item.paragraph}</p>
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

const NewHot =()=>{
    return(
        <div style={{ background: '#fff', padding: '20px 0' }}>
        <div className="new-arrival container">
            <HotBody/>
        </div>
        <HotBody2/>
        </div>
    )
}
export default NewHot;