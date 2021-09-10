import React from 'react';
import { WesternsWear } from '../Image';

const WesternHeader = () =>{
    return(
        <div>
            <h1>Western Wears</h1>
       </div>
    )
}

const WesternWear = ()=>{
    return(
        <div className="gallery-row py-3">
            {WesternsWear.map((item, index) => {
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
export default class Western extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="new-arrival">
                    <WesternHeader/>
                    <WesternWear/>
                </div>
            </React.Fragment>
        )
    }
}