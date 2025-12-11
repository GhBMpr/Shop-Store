import { Component } from "react";
import image from "../../../image/icons/unknown.jpeg"
import NavBar from "../../../component/NavBar";
export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <section className="contact" id="contact">
                    <div className="max-width">
                    <div className="contact-header">
                            <div className="text-c1">Contact <span className="text-c2">B.C.J</span></div>
                            <div className="text-c3">Our team of customer is ready to hear from you.</div>
                        </div>
                        <div className="contact-content">
                            <div className="contact-msg">
                                <h2>Reach out to us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae arcu eu lacus finibus sodales.</p>
                                <form>
                                    <input type="text" placeholder="Name" /><br />
                                    <input type="email" placeholder="Email" /><br />
                                    <input type="tlf" placeholder="Phone" /><br />
                                    <textarea placeholder="Your massege"></textarea><br />
                                    <a href="#"><span></span>Send</a>
                                </form>
                            </div>
                            <div className="contact-customer">
                                <h2>Customer Care</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ex a eros lacinia pharetra. Quisque in arcu sit amet dui facilisis viverra vehicula sit.</p>
                                <div className="customer-service1">
                                    <div className="customer-pic">
                                        <img src={image} alt="customer picture" />
                                    </div>
                                    <div className="customer-info">
                                        <h4>Customer's Name</h4>
                                        <span>Lorem ipsum</span><br />
                                    </div>
                                </div>
                                <div className="customer-service2">
                                    <div className="customer-pic">
                                        <img src={image} alt="customer picture" />
                                    </div>
                                    <div className="customer-info">
                                        <h4>Customer's Name</h4>
                                        <span>Lorem ipsum</span><br />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}