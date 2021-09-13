import React,{useState} from 'react';
import { WesternsWear } from '../Image';

const WesternHeader = () =>{
    return(
        <div>
            <h1>Western Wears</h1>
       </div>
    )
}

const WesternWear = ()=>{
    const [modal, setModal] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImg = (url)=>{
        setTempImg(url);
        setModal(true);
    }
    return(
        <div>
            <div className={modal? "modal open" : "modal"} onClick={()=>setModal(false)}>
                <img src={tempImg} alt="Temporary pop-up"/>
                <h1 onClick={()=>setModal(false)}>X</h1>
            </div>
            <div className="gallery-row py-3">
                {WesternsWear.map((item, index) => {
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
export default class Western extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="new-arrival">
                    <WesternHeader/>
                    <WesternWear/>
                </div>
            </React.Fragment>
        )
    }
}