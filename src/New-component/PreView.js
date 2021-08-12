import React from 'react';
import { Images } from './Image';
import { PreViewImage } from './Image';

const PreViewRoll1 =()=>{
    return(
            <div className=" gallery-row py-3">
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

const PreViewRoll2 =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {PreViewImage.map((item, index) => {
                return(
                    <div className="col-sm-3">
                        <ul id="autoWidth" className="cs-hidden">
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

const PreView = () =>{
    return(
            <div className="service-section"  id="gallery">
                <PreViewRoll1/>
                <PreViewRoll2/>
            </div>
    )
}
export default PreView;