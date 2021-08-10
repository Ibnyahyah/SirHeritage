import React from 'react';
import { Images } from './Image';
import { GalleryImage } from './Image';

const GalleryRoll1 =()=>{
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

const GalleryRoll2 =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {GalleryImage.map((item, index) => {
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

const Gallery = () =>{
    return(
        <div className=" service-section"  id="gallery">
            <GalleryRoll1/>
            <GalleryRoll2/>
        </div>
    )
}
export default Gallery;