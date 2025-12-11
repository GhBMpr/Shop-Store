import { Component } from "react";
import icon1 from '../image/icons/Home.png'
import icon2 from '../image/icons/instagram.png'
import icon3 from '../image/icons/location.png'
import icon4 from '../image/icons/gmail.png'
import FooterAnimation from "../assets/visiteur/js/FonctionFooter";
export default class Footer extends Component {
    render() {
        return (
            <section id="footer" className="footer">
                <div className="footer-content">
                    <div className="text"><span class="typing-4"><FooterAnimation/></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus dolorem, nesciunt quia labore doloremque necessitatibus delectus doloribus cupiditate veritatis.</p>
                    <div className="cont">
                        <div className="left">
                            <div className="cont-1">
                                <img src={icon1} />
                                <div>
                                    <div className="head">B.C.J</div>
                                    <span>Baby, Child, Junior</span>
                                </div>
                            </div>
                            <div className="cont-1">
                                <img src={icon2} />
                                <div>
                                    <div className="head">Instagram</div>
                                    <span><a href="##">BCJ</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="cont-1">
                                <img src={icon3} />
                                <div>
                                    <div className="head">Adresse</div>
                                    <span>Djerba, Mednine, Tunisia</span>
                                </div>
                            </div>
                            <div class="cont-1">
                                <img src={icon4} />
                                <div>
                                    <div className="head">E-mail</div>
                                    <span><a href="##">BCJ@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}