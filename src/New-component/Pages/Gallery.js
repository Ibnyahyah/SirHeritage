import React from 'react';
import NavBar from '../Nav';
import { TrendingWear } from '../Image';


const GalleryHeader = () =>{
    return(
        <div style={{color: '#000',
         padding: '20px', textAlign:'center',
          backgroundColor: '#fff', boxShadow:'1px 4px 4px rgba(0,0,0,0.09)'}}>
               <h1>Gallery</h1>
         </div>
    )
}

const GalleryImg =()=>{
    return(
        <div className="gallery-row py-3">
            {/* <h1>New Wears</h1> */}
            {TrendingWear.map((item, index) => {
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





const Gallery =()=>{
    return(
        <React.Fragment>
                <NavBar/>
                <GalleryHeader/>
            <div className="new-wears">
                <GalleryImg/>
            </div>
        </React.Fragment>
       
    )
}

export default Gallery;