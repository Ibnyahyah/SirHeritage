import React from 'react';
import { Link } from 'react-router-dom'

class Developer extends React.Component{
    render(){
        return(
            <div id="developer">
                <h1 className="text-center mb-3">Developer</h1>
                <div ClassName="container">
                    <div className="row">
                        <div className="col-sm-3 profile" style={{margin: 'auto'}}>
                            <img src="./profile.png" alt="" style={imgStyle}/>
                        </div>
                        <div className="col-sm-9">
                                <p>Hi, my name is Ibn yahyah. I am a front-end developer in Nigeria.</p>
                                <h3>What i do?</h3>
                                <p>I build any type of webSite or web application at affordable rate with the fastest language.</p>
                        </div>
                        <div className="btn primary-btn text-white">
                                    <a href="https://wa.me/+2348129418741" className="btn btn-primary">Hire Me </a> | <Link to="/" className="btn btn-primary" style={{color: '#fff'}}>Back to home</Link>
                                </div>
                    </div>
                </div>
            </div>
        )
    }
}

const imgStyle ={
    width: '70%'
}
export default Developer;