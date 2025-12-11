import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {
    render() {
        return (<div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <Link className="navbar-brand  ">
                            B.C.J
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products" className="nav-link">
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className='buttons'>
                                <Link to="/logIn" className="nav-link">
                                    <FontAwesomeIcon icon={faSignIn} />
                                </Link>
                            </div>
                            <div className='buttons'>
                                <Link to="/choose" className="nav-link">
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </Link>
                            </div>
                            <div className='buttons'>
                                <Link to="/cart" className="nav-link">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    (0)
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>)
    };
};