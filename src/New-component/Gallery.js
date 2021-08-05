import React from 'react';
import { Images } from './Image';
import { GalleryImage } from './Image';

const GalleryRoll1 =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
                {Images.map((item, index) => {
                    return(
                    <div className="col-sm-4">
                        <div className="gallery-image" key={index}>
                        <img src={item.url} alt={item.alt} />
                        <p className="text-center mt-2 mb-4">{item.paragraph}</p>
                        </div>
                        
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
                    <div className="col-sm-6">
                        <div className="gallery-image-2">
                            <img src={item.url} alt={item.alt}/>
                            <p className="text-center mt-2  mb-4">{item.title}</p>
                        </div>
                    </div>
                )
            } )}
         </div>      
    )
}

const Gallery = () =>{
    return(
        <div className="container service-section"  id="gallery">
            <GalleryRoll1/>
            <GalleryRoll2/>
        </div>
    )
}
export default Gallery;