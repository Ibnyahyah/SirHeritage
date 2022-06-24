import React from 'react';
import Navbar from '../Nav';
// import { ShopWear } from '../Image';

const ShopHeader = () =>{
    return(
        <div>
            <h1>Shop</h1>
       </div>
    )
}

// const ShopImage =()=>{
//     return(
//         <div className="row py-3 d-flex justify-content-between">
//             {ShopWear.map((item, index) => {
//                 return(
//                     <div className="col-sm-3">
//                         <ul>
//                             <li className={item.Cname}>
//                                 <div className="gallery-box-2 pb-2">
//                                     <div className="gallery-image-2" key={index}>
//                                         <img src={item.url} alt={item.alt} />
//                                     </div>
//                                         <p className="text-center mt-2 mb-4">{item.price}</p>
//                                         <a href={item.wUrl} className="btn btn-primary">{item.buy}</a>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 )
//             } )}
//          </div> 
//     )
// }

const ComingSoon =()=>{
    return(
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', margin:'200px 0 300px 0'}}>
            <h1 style={{color:'red', fontSize:'50px',textShadow:'1px 4px 4px black'}}>Co
                <span style={{color:'green',textShadow:'1px 4px 4px black'}}>mi</span>
                <span style={{color:'greenyellow',textShadow:'1px 4px 4px red'}}>ng </span>
                <span style={{color:'yellow',textShadow:'1px 4px 4px black'}}>So</span>
                <span style={{color:'#fff', textShadow:'1px 4px 4px red'}}>on</span>
            </h1>
        </div>
    )
}

class Shop extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
            <div className="shop">
                <ShopHeader/>
            </div>
                <ComingSoon/>
        </React.Fragment>
        )
    }
}
export default Shop;