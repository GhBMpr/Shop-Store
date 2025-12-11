import { Component } from "react";
/********importation des images de dress 1 */
import fd1c1 from "../../../image/female/d1-c1.jfif";
import fd1c2 from "../../../image/female/d1-c2.jfif";
import fd1c3 from "../../../image/female/d1-c3.jfif";
/********importation des images de jacket 1 */
import fj1c1 from "../../../image/female/j1-c1.jfif";
import fj1c2 from "../../../image/female/j1-c2.jfif";
import fj1c3 from "../../../image/female/j1-c3.jfif";
/********importation des images de jacket 2 */
import fj2c1 from "../../../image/female/j2-c1.jfif";
/********importation des images de pull 1 */
import fp1c1 from "../../../image/female/p1-c1.jfif";
/********importation des images de pull 2 */
import fp2c1 from "../../../image/female/p2-c1.webp";
/********importation des images de pull 3 */
import fp3c1 from "../../../image/female/p3-c1.jfif";
import fp3c2 from "../../../image/female/p3-c2.jfif";
import NavBar from "../../../component/NavBarProduct";
/*****importation de Font Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default class Female extends Component {
    handleImageChange = (imageId, newSrc) => {
        document.getElementById(imageId).src = newSrc;
    };
    render() {
        return (
            <div>
                <NavBar/>
                <section className="header product-header" id="header">
                    <div className="max-width">
                        <div className="header-content">
                            <div className="text-1">Discover Style, Quality, and Comfort</div>
                        </div>
                    </div>
                </section>
                <div className="productpage">
                    <div className="women" >
                        <div className="line">
                            <div className="cloth">
                                <img src={fd1c1} id="dres1" />
                                <div className="colors">
                                    <div className="blue color-box" onClick={() => this.handleImageChange("dres1", fd1c1)}></div>
                                    <div className="yellow color-box" onClick={() => this.handleImageChange("dres1", fd1c2)}></div>
                                    <div className="pink color-box" onClick={() => this.handleImageChange("dres1", fd1c3)}></div>
                                </div>
                                <span>100,192$</span>
                                <p>Dress</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>

                            </div>
                            <div className="cloth">
                                <img src={fj1c1} id="fjack1" />
                                <div className="colors">
                                    <div className="black color-box" onClick={() => this.handleImageChange("fjack1", fj1c1)}></div>
                                    <div className="blue color-box" onClick={() => this.handleImageChange("fjack1", fj1c2)}></div>
                                    <div className="pink color-box" onClick={() => this.handleImageChange("fjack1", fj1c3)}></div>
                                </div>
                                <span>30,192$</span>
                                <p>Jackette</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="cloth">
                                <img src={fj2c1} id="fjack2" />
                                <div className="colors">
                                    <div className="green  color-box"></div>
                                </div>
                                <span>130,192$</span>
                                <p>Jackette</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div className="cloth">
                                <img src={fp1c1} id="fpull1" />
                                <div className="colors">
                                    <div className="black  color-box" ></div>
                                </div>
                                <span>35,192$</span>
                                <p>Pulle noir</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="cloth">
                                <img src={fp2c1} id="pull2" />
                                <div className="colors">
                                    <div className="gray color-box"></div>
                                </div>
                                <span>50,192$</span>
                                <p>Pulle gris</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                            <div className="cloth">
                                <img src={fp3c1} id="fpull3" />
                                <div className="colors">
                                    <div className="white color-box" onClick={() => this.handleImageChange("fpull3", fp3c1)}></div>
                                    <div className="blue color-box" onClick={() => this.handleImageChange("fpull3", fp3c2)}></div>
                                </div>
                                <span>45,192$</span>
                                <p>Pulle</p>
                                <div>
                                    <button type="submit">Buy</button>
                                    <FontAwesomeIcon icon={faHeart} className="fav me-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}