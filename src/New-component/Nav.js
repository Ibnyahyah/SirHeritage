import React from 'react';
import { MenuItem } from './MenuItem';


class NavBar extends React.Component{

    state = {
        clicked: false
    }

handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
}
    render(){
        return(
                <nav>
                    <header>
                        <h4>Sir<span>Heritage</span></h4>
                    </header>
                    <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-item active" : "nav-item"}>
                        
                        {MenuItem.map((item, index) => {
                            return(
                                <li className={item.cName} key={index}>
                                    <a href={item.url}>
                                        {item.title}
                                    </a></li>
                            )
                        })}
                        
                    </ul>
                </nav>
            
        )
    }
}

export default NavBar;