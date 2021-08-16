import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingWear } from '../Image';


const GalleryHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fff', color: '#000', padding: '20px', textAlign:'center'}}>
            <div>
                <Link to="/">
                    <img src="./logo5.png" alt="logo" width="100" height="100"/>
                </Link>
               <h1>Gallery</h1>
         </div>
         <div>
                <Link to="/" style={linkStyle}>Home </Link>|<Link to="native-wear" style={linkStyle}> Natives </Link>
                |<Link to="western-wear" style={linkStyle}> English </Link>|<Link to="https://www.wa.me/" style={linkStyle}> ChatUs</Link>
            </div>
       </div>
    )
}
const  linkStyle ={
    color: '#000'
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
        <React.Fragment>
                <GalleryHeader/>
            <div className="new-arrival">
                <GalleryImg/>
            </div>
        </React.Fragment>
       
    )
}

export default Gallery;