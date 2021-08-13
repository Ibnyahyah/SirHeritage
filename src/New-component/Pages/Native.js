import React from 'react';
import GalleryHeader from './Gallery'
import { NativesWear } from '../Image';

const NativeWear = ()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {NativesWear.map((item, index) => {
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
export default class Native extends React.Component{
    render(){
        return(
            <div className="new-arrival">
            <GalleryHeader/>
            <NativeWear/>
            </div>
        )
    }
}