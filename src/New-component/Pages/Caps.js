import { useState } from 'react';
import { Cap } from '../Image';

export function Caps(){
    
    const [modal, setModal] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImg = (url) =>{
        setTempImg(url);
        setModal(true);
    }
    return(
        <div>
            <div className={modal? "modal open" : "modal" } onClick={ () => setModal(false)}>
                <img src={tempImg} alt="temporary pop-up"/>
                <h1 onClick={ () => setModal(false) }>X</h1>
            </div>
            <h1>Caps</h1>
            <div className="gallery-row py-3">
                {Cap.map((item, index) => {
                        return(
                        <div className="col-sm-2">
                            <ul id="autoWidth" className="cs-hidden">
                                <li className={item.Cname}>
                                    <div className="gallery-box">
                                        <div className="gallery-image" key={index} onClick={()=> getImg(item.url)}>
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