import React from 'react';
import { Link } from 'react-router-dom';
import { WesternsWear } from '../Image';

const WesternHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fff', color: '#000', padding: '20px', textAlign:'center'}}>
            <div>
                <Link to="/">
                    <img src="./logo5.png" alt="logo" width="100" height="100"/>
                </Link>
               <h1>Western Wears</h1>
            </div>
            <div>
                <Link to="/" style={linkStyle}>Home </Link>||<Link to="/gallery" style={linkStyle}> Back</Link>
            </div>
       </div>
    )
}
const  linkStyle ={
    color: '#fff'
}

const WesternWear = ()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {WesternsWear.map((item, index) => {
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
export default class Western extends React.Component{
    render(){
        return(
            <React.Fragment>
                <WesternHeader/>
                <div className="new-arrival">
                    <WesternWear/>
                </div>
            </React.Fragment>
        )
    }
}