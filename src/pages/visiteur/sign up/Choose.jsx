import { Component } from "react";
import NavBar from '../../../component/NavBar';
import clientImg from '../../../image/icons/client.png';
import LivreurImg from '../../../image/icons/delivery-boy.png';
import { Link } from 'react-router-dom';
import Header from "../../../component/Header";
import TypingAnimation from "../../../assets/visiteur/js/FonctionHeader";
export default class Choose extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <section className="header choose" id="header">
                    <div className="max-width">
                        <div className="header-content choose-content">
                            <div className="text-1">Welcome to our</div>
                            <div className="text-2">Shop Store</div>
                            <div className="text-3"><span className="typing"><TypingAnimation /></span></div>
                            <div className="header-btn choose-btn">
                                <Link to="/signupClient"><span></span>Sign up as Client</Link>
                                <Link to="/signupDelivery"><span></span>Sign up as Delivery</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
 
        );
    }
}
