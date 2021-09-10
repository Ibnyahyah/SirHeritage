import React from 'react';
import { NativesWear } from '../Image';


const NativeHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#000', textAlign:'left'}}>
               <h1>Native Wears</h1>
       </div>
    )
}

const NativeWear = ()=>{
    return(
        <div className="gallery-row py-3">
            {NativesWear.map((item, index) => {
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
export default class Native extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="natives">
                    <NativeHeader/>
                    <NativeWear/>
                </div>
            </React.Fragment>
        )
    }
}