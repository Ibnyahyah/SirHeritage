import React from 'react';
import { Link } from 'react-router-dom';
import {MenuItem} from './MenuItem';

const About=()=>{
    return(
        <div className="col-sm-3" id="about">
            <h4>About Us</h4>
            <p>SirHeritage is a fashion institude, that deal with wears both Native and English wears.
                 We sew clothes to satisty our customers.
            </p>
            <h4>Opening Time</h4>
            <p>Monday - Friday .... 9.00 to 19.00<br/>
            Saturday ................ 9.00 to 18.00 <br/>
            Sunday ................ 10.00 to 15.00</p>
        </div>
    )
}

const Contact =()=>{
    return(
        <div className="col-sm-3" id="contact">
            <h4>Contact Us</h4>
            <div className="footer-links">
                <li>
                    <i class="fas fa-map-marker-alt"> </i>{'  '}
                     No: 10, asa-dam Road, opposite Ile-anu street, Ilorin, Kwara State.
                </li>
                <li><a href={'https://wa.me/+2348168867603'}>
                <i class="fab fa-whatsapp"> </i>{'  '}
                     Whatsapp Us On: +2348168867603</a>
                </li>
                <li><a href={'mailto:yahayaabdulrashydokeho1@gmail.com'}>
                <i class="fas fa-envelope-open-text"> </i>{'  '}
                SirHeritage@gmail.com</a>
                </li>
                <li><a href={'telto:+2348168867603'}>
                    <i class="fas fa-phone"></i>{'  '}
                     Call us on: 08168867603, 09034920595
                    </a>
                </li>
            </div>
        </div>
    )
}
const UsefulLinks = ()=>{
    return (
        <div className="col-sm-3">
            <h4>Useful Links</h4>
            <div className="footer-links">
                {MenuItem.map((item, index) => {
                    return(
                        <li>
                            <Link to={item.url} className={item.className}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                 </div>
        </div>
    )
}

const Message = () =>{
    return(
        <div className="col-sm-3 my-lg-5">
            <h4>Message From Us</h4>
            <p>A good Cloth make a Good look...Thank You!</p>
        </div>
    )
}

// const FullYear =()=>{
//     return document.write(new Date().getFullYear());
// }

const CopyWrite=()=>{
    return(

        <div className="copywrite mt-2">
            <p>Copyright &copy; 2021 Reserve | <Link to="#">Developed : Bn ibn</Link></p>
        </div>
    )
}
class Footer extends React.Component{
    render(){
        return(
            <footer>
                
            <div className="container-fluid">
                <div className="row">
                    <About/>
                    <Message/>
                    <Contact/>
                    <UsefulLinks/>
                </div>
                <CopyWrite/>
            </div>

            </footer>
        )
    }
}

export default Footer;