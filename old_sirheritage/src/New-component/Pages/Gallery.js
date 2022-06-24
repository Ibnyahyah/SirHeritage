import React, {useState} from 'react';
import NavBar from '../Nav';
import Native from './Native';
import Western from './Western';
import { Caps } from './Caps';
import { TrendingWear } from '../Image';


const GalleryHeader = () =>{
    return(
        <div className="galleryHeader">
               <h1>Gallery</h1>
         </div>
    )
}

const GalleryImg =()=>{
    const [modal, setModal] = useState(false);
    const [tempImg, setTempImg] =useState('');
    const getImg = (url) =>{
        setTempImg(url);
        setModal(true);
    }
    return(
        <div>
            <div className={modal? "modal open" : "modal"} onClick={()=> setModal(false)}>
                <img src={tempImg} alt="Temporary pop-up"/>
                <h1 onClick={()=> setModal(false)}>X</h1>
            </div>
            <div className="gallery-row py-3">
                {TrendingWear.map((item, index) => {
                        return(
                        <div className="col-sm-2">
                            <ul id="autoWidth" className="cs-hidden">
                                <li className={item.Cname}>
                                    <div className="gallery-box">
                                        <div className="gallery-image" key={index} onClick={()=>getImg(item.url)}>
                                            <img src={item.url} alt={item.alt} />
                                        </div>
                                    </div>
                                </li>
                            </ul>   
                        </div>
                        )
                    })}
            </div>    
         </div>  
    )
}





const Gallery =()=>{
    return(
        <React.Fragment>
                <NavBar/>
                <GalleryHeader/>
            <div className="new-wears">
                <h1>New Wears</h1>
                <GalleryImg/>
                {/* Natives */}
                <Native/>
                {/* Western */}
                <Western/>
                {/* Caps */}
                <Caps/>
            </div>
        </React.Fragment>
       
    )
}

export default Gallery;