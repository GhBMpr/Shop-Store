import { Component } from "react";
import NavBar from '../../../component/NavBar'
export default class SignupClient extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <section className=" clientSignUp " id="header">
                    <div className="max-width">
                        <div className="header-content">
                            <div className="text-5">Be our client,</div>
                        </div>
                    </div>
                </section>
                <div className="client-sign-up">
                    <form>
                        <label >Name :</label><br />
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required /><br />
                        <label>Phone Number :</label><br />
                        <input type="tel" required /><br />
                        <label>Email Address</label><br />
                        <input type="email" required placeholder="example@example.com" /><br />
                        <label >Address :</label><br />
                        <input type="text" placeholder="Street Address" required />
                        <input type="text" placeholder="Street Address Line 2" required /><br />
                        <input type="text" placeholder="City" required />
                        <input type="text" placeholder="State" required /><br />
                        <input type="text" placeholder="Postal" required /><br />
                        <a href="#"><span></span>Sign up</a>
                    </form>
                </div>
            </div>

        )
    }
}