import React from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return(
     
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
              
                <NavLink className="navbar-brand" to="/">TheCulinary</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            

                <div className="collapse navbar-collapse mb-2" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-12">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary">
                                Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/breakfast">Breakfast</Dropdown.Item>
                                <Dropdown.Item href="/snacks">Snacks</Dropdown.Item>
                                <Dropdown.Item href="/cakes">Cakes</Dropdown.Item>
                                <Dropdown.Item href="/maincourse">Main Course</Dropdown.Item>
                                <Dropdown.Item href="/desserts">Desserts</Dropdown.Item>
                                <Dropdown.Item href="/beverages">Beverages</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item ml-3">
                            <NavLink activeClassName="menuActive" className="nav-link" to="/register">Sign Up</NavLink>
                        </li>
                    
                    </ul>
                    
                </div>
            </nav>
            
       
        
    )
}

export default Header;