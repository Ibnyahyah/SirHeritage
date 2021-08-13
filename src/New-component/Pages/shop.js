import React from 'react';
import { ShopWear } from '../Image'

const ShopHeader=()=>{
    return(
        <div style={{
             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
             backgroundColor: '#000', color: '#fff', padding: '20px', textAlign:'center', marginTop: '100px' }}>
                <h1>Shop</h1>
        </div>
    )
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
                                        <p className="text-center mt-2 mb-4">{item.paragraph}</p>
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