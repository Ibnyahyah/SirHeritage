import React from 'react';

const GalleryRoll1 =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            <div className="col-sm-4">
            <div className="gallery-image">
                    <img src="/images/test8.jpg"/>
                    <p className="text-center mt-2 mb-4">Agbada</p>
                </div>
            </div>
            <div className="col-sm-4">
            <div className="gallery-image">
                    <img src="/images/test3.jpg"/>
                    <p className="text-center mt-2  mb-4">So'ro</p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="gallery-image">
                    <img src="/images/test3.jpg"/>
                    <p className="text-center mt-2  mb-4">Suit</p>
                </div>
            </div>
         </div>      
    )
}

const GalleryRoll2 =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            <div className="col-sm-6">
            <div className="gallery-image-2">
                    <img src="/images/test3.jpg"/>
                    <p className="text-center mt-2  mb-4">Trousers</p>
                </div>
            </div>
            <div className="col-sm-6">
            <div className="gallery-image-2">
                    <img src="/images/test4.jpg"/>
                    <p className="text-center mt-2  mb-4">Shirt</p>
                </div>
            </div>
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