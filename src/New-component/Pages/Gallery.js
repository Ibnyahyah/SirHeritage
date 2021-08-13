import React from 'react';
// import { Link } from 'react-router-dom';
import { TrendingWear } from '../Image';


export const GalleryHeader = () =>{
    return(
        <div style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: '#000', color: '#fff', padding: '20px', textAlign:'center', marginTop: '100px' }}>
               <h1>Gallery</h1>
       </div>
    )
}

const GalleryImg =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {TrendingWear.map((item, index) => {
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





const Gallery =()=>{
    return(
            <div className="new-arrival">
            <GalleryHeader/>
            <GalleryImg/>
            </div>
       
    )
}

export default Gallery;