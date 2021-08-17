import React from 'react';
import { Link } from 'react-router-dom';
import { ShopWear } from '../Image';

const ShopHeader = () =>{
    return(
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fff', color: '#000', padding: '20px', textAlign:'center'}}>
            <div>
                <Link to="/">
                    <img src="./logo5.png" alt="logo" width="100" height="100"/>
                </Link>
                <hr/>
                    <h1>Shop</h1>
            </div>
         <div>
                <Link to="/" style={linkStyle}>Home </Link>||<Link to="/" style={linkStyle}> Help</Link>
            </div>
       </div>
    )
}
const  linkStyle ={
    color: '#000'
}

const ShopImage =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {ShopWear.map((item, index) => {
                return(
                    <div className="col-sm-3">
                        <ul>
                            <li className={item.Cname}>
                                <div className="gallery-box-2 pb-2">
                                    <div className="gallery-image-2" key={index}>
                                        <img src={item.url} alt={item.alt} />
                                    </div>
                                        <p className="text-center mt-2 mb-4">{item.price}</p>
                                        <a href={item.wUrl} className="btn btn-primary">{item.buy}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            } )}
         </div> 
    )
}

class Shop extends React.Component{
    render(){
        return(
            <React.Fragment>
            <ShopHeader/>
            <div className="new-arrival">
                <ShopImage/>
            </div>
        </React.Fragment>
        )
    }
}
export default Shop;