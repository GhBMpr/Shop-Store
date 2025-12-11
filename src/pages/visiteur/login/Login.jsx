import { Component } from "react";
import NavBar from "../../../component/NavBar";

export  default class Login extends Component{
    render(){
        return(
            <div >
                <NavBar/>
                <section className="login-header" id="header">
                    <div className="max-width">
                        <div className="header-content ">
                            <div className="text-1">Welcome Back !</div>
                        </div>
                    </div>
                </section>
                <form className="login">
                    <input type="email" placeholder="Email"/> <br/>
                    <input type="password" placeholder="Password"/> <br/>
                    <a href="#"><span></span>Log in</a>
                </form>
            </div>
        )
    }
}