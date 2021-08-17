import React from 'react';
import { Link } from 'react-router-dom';
import { NativesWear } from '../Image';


const NativeHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fff', color: '#000', padding: '20px', textAlign:'center'}}>
            <div>
                <Link to="/">
                    <img src="./logo5.png" alt="logo" width="100" height="100"/>
                </Link>
            <hr/>
               <h1>Native Wears</h1>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Home </Link>||<Link to="/gallery" style={linkStyle}> Back</Link>
            </div>
       </div>
    )
}
const  linkStyle ={
    color: '#000'
}
const NativeWear = ()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {NativesWear.map((item, index) => {
                return(
                    <div className="col-sm-3">
                        <ul>
                            <li className={item.Cname}>
                                <div className="gallery-box-2">
                                    <div className="gallery-image-2" key={index}>
                                        <img src={item.url} alt={item.alt} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            } )}
         </div>      
    )
}
export default class Native extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NativeHeader/>
                <div className="new-arrival">
                    <NativeWear/>
                </div>
            </React.Fragment>
        )
    }
}