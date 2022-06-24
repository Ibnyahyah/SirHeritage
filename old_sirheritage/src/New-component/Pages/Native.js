import React,{useState} from 'react';
import { NativesWear, NativesWear2 } from '../Image';


const NativeHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#000', textAlign:'left'}}>
               <h1>Native Wears</h1>
       </div>
    )
}

const NativeWear = ()=>{
    const [modal, setModal] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImg = (url)=> {
        setModal(true);
        setTempImg(url);
    }
    return(
        <div>
            <div className={modal? "modal open" : "modal"} onClick={()=> setModal(false)}>
                <img src={tempImg} alt="Temporary pop-up"/>
                <h1 onClick={()=>setModal(false)}>X</h1>
            </div>
            <div className="gallery-row py-3">
                {NativesWear.map((item, index) => {
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
            <div className="gallery-row py-3">
                {NativesWear2.map((item, index) => {
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
export default class Native extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="natives">
                    <NativeHeader/>
                    <NativeWear/>
                </div>
            </React.Fragment>
        )
    }
}