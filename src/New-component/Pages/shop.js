import React from 'react';
import { ShopWear } from '../Image'
import { Link } from 'react-router-dom';

const ShopHeader=()=>{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between',
             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
             backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <div className='Gallery-header'>
                <h1>Shop</h1>
                <Link to="/" style={linkStyle}>Home</Link> | <Link to="/shop" style={linkStyle}>Shop</Link>
            </div>
            <h1>SirHeritage</h1>
        </div>
    )
}
const linkStyle = {
    color: '#fff'
}

const ShopImage =()=>{
    return(
        <div className="row py-3 d-flex justify-content-between">
            {ShopWear.map((item, index) => {
                return(
                    <div className="col-sm-3">
                        <ul id="autoWidth" className="cs-hidden">
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