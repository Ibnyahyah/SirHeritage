import React from 'react';
import GalleryHeader from './Gallery'
import { WesternsWear } from '../Image';

const WesternWear = ()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {WesternsWear.map((item, index) => {
                return(
                    <div className="col-sm-3">
                        <ul>
                            <li className={item.Cname}>
                                <div className="gallery-box-2">
                                    <div className="gallery-image-2" key={index}>
                                        <img src={item.url} alt={item.alt} />
                                    </div>
                                        <p className="text-center mt-2 mb-4">{item.paragraph}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            } )}
         </div>      
    )
}
export default class Western extends React.Component{
    render(){
        return(
            <div className="new-arrival">
            <GalleryHeader/>
            <WesternWear/>
            </div>
        )
    }
}