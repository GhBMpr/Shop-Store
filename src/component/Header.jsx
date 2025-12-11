import React, { Component } from 'react';
import TypingAnimation from "../assets/visiteur/js/FonctionHeader";
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div>
                <section className="header" id="header">
                    <div className="max-width">
                        <div className="header-content">
                            <div className="text-1">Welcome to our</div>
                            <div className="text-2">Shop Store</div>
                            <div className="text-3"><span className="typing"><TypingAnimation /></span></div>
                            <div className="header-btn">
                                <Link to="/products"><span></span>Buy now</Link>
                                <Link to="/logIn"><span></span>Log in</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

